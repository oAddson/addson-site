const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },            
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body'
        })
    ]
};