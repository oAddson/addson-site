const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            }                         
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body'
        })
    ],
    target: ['es5']
};