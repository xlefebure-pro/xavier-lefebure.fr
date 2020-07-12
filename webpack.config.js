const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
var LiveReloadPlugin = require('webpack-livereload-plugin');

let config = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: './assets/js/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './public'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new LiveReloadPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				},
				include: [/fonts/]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// process.env.NODE_ENV !== 'production'
					//   ? 'style-loader'
					//   : MiniCssExtractPlugin.loader,
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								importer: globImporter()
							}
						}
					},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
		]
	}
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new UglifyJsPlugin(),
		new OptimizeCSSAssetsPlugin()
	);
}