import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as fs from "fs";
import * as mime from "mime";
import * as path from "path";

const bucket = new aws.s3.Bucket("admin-app", {
    acl: "public-read",
    website: {
        indexDocument: "index.html",
        errorDocument: "index.html"
    }
});

// Sync the contents of the source directory with the S3 bucket, which will in-turn show up on the CDN.
const webContentsRootPath = path.join(__dirname, "code", ".next", "serverless", "pages");
crawlDirectory(webContentsRootPath, (filePath: string) => {
    const relativeFilePath = filePath.replace(webContentsRootPath + "/", "");
    new aws.s3.BucketObject(
        relativeFilePath,
        {
            key: relativeFilePath,
            acl: "public-read",
            bucket: bucket,
            contentType: mime.getType(filePath) || undefined,
            source: new pulumi.asset.FileAsset(filePath)
        },
        {
            parent: bucket
        }
    );
});

// Create SSR functions.
// TODO: Simplify role, probably requires very few permissions.
const role = new aws.iam.Role("api-lambda-role", {
    assumeRolePolicy: {
        Version: "2012-10-17",
        Statement: [
            {
                Action: "sts:AssumeRole",
                Principal: {
                    Service: "lambda.amazonaws.com"
                },
                Effect: "Allow"
            }
        ]
    }
});

new aws.iam.RolePolicyAttachment("api-lambda-role-policy", {
    role,
    policyArn: "arn:aws:iam::aws:policy/AdministratorAccess"
});

// TODO: automatically pickup from the build folder.
// pageBuilderRenderer
const pageBuilderRenderer = new aws.lambda.Function("pb-renderer", {
    runtime: "nodejs12.x",
    handler: "handler.handler",
    description: "Renders pages created via the Page Builder's editor.",
    role: role.arn,
    timeout: 60,
    memorySize: 2048,
    code: new pulumi.asset.AssetArchive({
        ".": new pulumi.asset.FileArchive("./code/.next/serverless/pages/page-builder-renderer")
    })
});

const api = new aws.apigatewayv2.Api("api-gateway", {
    protocolType: "HTTP",
    description: "SSR API gateway"
});

const defaultStage = new aws.apigatewayv2.Stage("default", {
    apiId: api.id,
    autoDeploy: true
});

const apiGatewayRoutes = [
    {
        name: "page-builder-renderer",
        path: "/page-builder-renderer/{key+}",
        method: "GET",
        function: pageBuilderRenderer
    }
];

for (let i = 0; i < apiGatewayRoutes.length; i++) {
    const route = apiGatewayRoutes[i];
    const integration = new aws.apigatewayv2.Integration(route.name, {
        description: "Apollo Gateway Integration",
        apiId: api.id,
        integrationType: "AWS_PROXY",
        integrationMethod: route.method,
        integrationUri: route.function.arn,
        passthroughBehavior: "WHEN_NO_MATCH"
    });

    new aws.apigatewayv2.Route(route.name, {
        apiId: api.id,
        routeKey: `${route.method} ${route.path}`,
        target: integration.id.apply(value => `integrations/${value}`)
    });

    new aws.lambda.Permission(`allow-${route.name}`, {
        action: "lambda:InvokeFunction",
        function: route.function.arn,
        principal: "apigateway.amazonaws.com",
        sourceArn: api.executionArn.apply(arn => `${arn}/*/*${route.path}`)
    });
}

const cloudfront = new aws.cloudfront.Distribution("admin-app-cdn", {
    enabled: true,
    waitForDeployment: false,
    origins: [
        {
            originId: bucket.arn,
            domainName: bucket.websiteEndpoint,
            customOriginConfig: {
                originProtocolPolicy: "http-only",
                httpPort: 80,
                httpsPort: 443,
                originSslProtocols: ["TLSv1.2"]
            }
        }
    ],
    defaultRootObject: "index.html",
    defaultCacheBehavior: {
        targetOriginId: bucket.arn,
        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD", "OPTIONS"],
        cachedMethods: ["GET", "HEAD", "OPTIONS"],
        forwardedValues: {
            cookies: { forward: "none" },
            queryString: false
        },
        minTtl: 0,
        defaultTtl: 600,
        maxTtl: 600
    },
    priceClass: "PriceClass_100",
    customErrorResponses: [{ errorCode: 404, responseCode: 404, responsePagePath: "/index.html" }],
    restrictions: {
        geoRestriction: {
            restrictionType: "none"
        }
    },
    viewerCertificate: {
        cloudfrontDefaultCertificate: true
    }
});

function crawlDirectory(dir: string, f: (_: string) => void) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = `${dir}/${file}`;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            crawlDirectory(filePath, f);
        }
        if (stat.isFile()) {
            f(filePath);
        }
    }
}

export const CDN = cloudfront.domainName;
export const API_GATEWAY = defaultStage.invokeUrl
