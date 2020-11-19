const withPackages = require("next-transpile-modules")(["theme"]);
const withImages = require("next-images");
const { allPackages } = require("@webiny/project-utils/packages");

const packages = [...allPackages(), "node_modules"];

module.exports = withPackages(
    withImages({
        target: "serverless",
        typescript: {
            ignoreBuildErrors: true
        },
        env: {
            REACT_APP_USER_POOL_REGION: "eu-central-1",
            REACT_APP_GRAPHQL_API_URL: "https://d1tsr59p2dxbxy.cloudfront.net/graphql",
            REACT_APP_API_URL: "https://d1tsr59p2dxbxy.cloudfront.net",
            REACT_APP_USER_POOL_ID: "eu-central-1_epSCMTYVj",
            REACT_APP_USER_POOL_WEB_CLIENT_ID: "69u35ll1qqac667bahfp5p7t32"
        },
        webpack(config) {
            config.module.rules.unshift({
                test: /\.svg$/,
                include: file => {
                    return packages.some(pkg => file.includes(pkg));
                },
                use: [{ loader: "@svgr/webpack" }]
            });

            config.resolve.alias.slate = require.resolve(
                "../../../packages/app-i18n/node_modules/slate"
            );
            config.resolve.alias["slate-react"] = require.resolve(
                "../../../packages/app-i18n/node_modules/slate-react"
            );

            return config;
        }
    })
);
