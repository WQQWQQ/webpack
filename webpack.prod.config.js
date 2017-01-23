var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "app");
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app:path.resolve(APP_PATH,"index.js"),
		vendors:["jquery"],
		mobile:path.resolve(APP_PATH,'mobile.js')
	},
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: BUILD_PATH,
		filename: '[name].js'
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({minimize:true}),
		new webpack.optimize.CommonsChunkPlugin("vendors",'vendors.js'),
		new HtmlwebpackPlugin({
            title: "Hello World app"
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            'window.jQuery':"jquery"
        })
	],
	module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            include: APP_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=80000'
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        }]
    }
};