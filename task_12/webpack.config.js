const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
       rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
           },
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           {
               test: /\.scss$/,
               use: extractPlugin.extract({
                   use: ['css-loader?url=false',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers:['ie >= 8', 'last 4 version']
                                    })
                                ],
                            }
                        }, 'sass-loader']
               })
           },
           {
               test: /\.html$/,
               use: ['html-loader']
           },
           {
               test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
               use: [
                   {
                       loader: 'file-loader',
                       options: {
                           name: '[name].[ext]',
                           outputPath: 'img/',
                           publicPath: 'img/'
                       }
                   }
               ]
           }
       ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            //...
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
