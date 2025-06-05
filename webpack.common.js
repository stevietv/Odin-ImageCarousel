const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlBundlerPlugin({
          entry: [{
            import: "./src/template.html",
            filename: "index.html",
            data: { title: "Home" },
          }],
          js: {
            filename: "[name].[contenthash:8].js",
          },
          css: {
            filename: 'css/[name].[contenthash:8].css',
          },
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/i,
                loader: 'svg-inline-loader'
            },
        ],
    },
};