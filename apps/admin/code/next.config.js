const withImages = require("next-images");
const { green, red } = require("chalk");

module.exports = withImages({
    target: "serverless",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            include: file => {
                
                const include = (
                    file.includes(__dirname) ||
                    file.includes("node_modules") ||
                    file.includes("packages")
                );
                
                if(include) {
                    console.log(`[ ${green("@SVGR")} ] ${file}`);
                } else {
                    console.log(`[ ${red("SKIP")} ] ${file}`);
                }
                
                return include;
            },
            use: ["@svgr/webpack"]
        });

        return config;
    }
});
