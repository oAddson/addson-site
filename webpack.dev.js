const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    entry: ['./src/index.js', './src/js/Server.js'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
});