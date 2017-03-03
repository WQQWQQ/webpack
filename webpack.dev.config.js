/**
 * Created by Quincy on 2017/1/18.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, 'templates');


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, "index.js"),
        vendors: ["jquery"],
        mobile: path.resolve(APP_PATH, 'mobile.js')
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendors", 'vendors.js'),
        new HtmlwebpackPlugin({
            title: "Hello World app",
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: "index.html",
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: "Hello Mobile app",
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: "mobile.html",
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': "jquery"
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
            '/Api/*': {
                target: 'http://localhost:8090/',
                secure: false
            }
        }
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css?modules!sass?sourceMap',
            include: APP_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=80000'
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH
        }]
    }
};