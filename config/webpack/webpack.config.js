/* eslint-disable */
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const { webpackConfig, merge } = require("@decidim/webpacker");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const customConfig = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};

webpackConfig.optimization = {};
const combinedConfig = merge(webpackConfig, customConfig);

module.exports = combinedConfig;
