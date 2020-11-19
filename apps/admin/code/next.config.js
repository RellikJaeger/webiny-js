const withImages = require("next-images");
const { green, red } = require("chalk");
const { allPackages } = require("@webiny/project-utils/packages");

const packages = allPackages();

module.exports = withImages({
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
        config.module.rules.push({
            test: /\.svg$/,
            include: file => {
                return packages.some(pkg => file.startsWith(pkg));
            },
            use: ["@svgr/webpack"]
        });

        return config;
    }
});
