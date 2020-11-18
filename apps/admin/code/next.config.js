const withImages = require("next-images");
const { green, red } = require("chalk");
const { allPackages } = require("@webiny/project-utils/packages");

const packages = allPackages();

module.exports = withImages({
    target: "serverless",
    typescript: {
        ignoreBuildErrors: true
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
