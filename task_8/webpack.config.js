/*
   ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/templates/client/index.html',
    filename: 'index.html',
    inject: 'body'
})
const BundleTracker = require('webpack-bundle-tracker')
const BundleTrackerConfig = new BundleTracker({filename: './webpack-stats.json'})

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        BundleTrackerConfig
    ]
}