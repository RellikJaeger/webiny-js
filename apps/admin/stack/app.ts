import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as fs from "fs";
import * as mime from "mime";
import * as path from "path";

class App {
    bucket: aws.s3.Bucket;
    apiGate;
    constructor() {
        this.bucket = new aws.s3.Bucket("admin-app", {
            acl: "public-read",
            website: {
                indexDocument: "index.html",
                errorDocument: "index.html"
            }
        });

        // Sync the contents of the source directory with the S3 bucket, which will in-turn show up on the CDN.
        const webContentsRootPath = path.join(__dirname, "..", "code", ".next", "serverless", "pages");
        App.crawlDirectory(webContentsRootPath, (filePath: string) => {
            const relativeFilePath = filePath.replace(webContentsRootPath + "/", "");
            new aws.s3.BucketObject(
                relativeFilePath,
                {
                    key: relativeFilePath,
                    acl: "public-read",
                    bucket: this.bucket,
                    contentType: mime.getType(filePath) || undefined,
                    source: new pulumi.asset.FileAsset(filePath)
                },
                {
                    parent: this.bucket
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

        const pageBuilderRenderer = new aws.lambda.Function("pb-renderer", {
            runtime: "nodejs12.x",
            handler: "[[...args]].handler",
            description: "Renders pages created via the Page Builder's editor.",
            role: role.arn,
            timeout: 60,
            memorySize: 2048,
            code: new pulumi.asset.AssetArchive({
                ".": new pulumi.asset.FileArchive(
                    "./code/.next/serverless/pages/page-builder-renderer"
                )
            }),
        });

        this.api = new aws.apigatewayv2.Api("api-gateway", {
            protocolType: "HTTP",
            description: "SSR API gateway"
        });

        this.defaultStage = new aws.apigatewayv2.Stage("default", {
            apiId: this.api.id,
            autoDeploy: true
        });

        const apiGatewayRoutes = [
            {
                name: "page-builder-renderer",
                path: "/page-builder-renderer",
                method: "GET",
                function: pageBuilderRenderer
            }
        ];

        for (let i = 0; i < apiGatewayRoutes.length; i++) {
            const route = apiGatewayRoutes[i];
            const integration = new aws.apigatewayv2.Integration(route.name, {
                description: "Apollo Gateway Integration",
                apiId: this.api.id,
                integrationType: "AWS_PROXY",
                integrationMethod: route.method,
                integrationUri: route.function.arn,
                passthroughBehavior: "WHEN_NO_MATCH"
            });

            new aws.apigatewayv2.Route(route.name, {
                apiId: this.api.id,
                routeKey: `${route.method} ${route.path}`,
                target: integration.id.apply(value => `integrations/${value}`)
            });

            new aws.lambda.Permission(`allow-${route.name}`, {
                action: "lambda:InvokeFunction",
                function: route.function.arn,
                principal: "apigateway.amazonaws.com",
                sourceArn: this.api.executionArn.apply(arn => `${arn}/*/*${route.path}`)
            });
        }
    }

    static crawlDirectory(dir: string, f: (_: string) => void) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = `${dir}/${file}`;
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                App.crawlDirectory(filePath, f);
            }
            if (stat.isFile()) {
                f(filePath);
            }
        }
    }
}

export default App;
