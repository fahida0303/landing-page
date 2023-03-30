var path = require('path');
var webpack = require('webpack');

var config = require('../webpack.config.dev.js'); // Getting the original webpack.config
var Loaders = require('../webpack.loaders.js'); // Getting the same loaders that I use for the original config file

module.exports = {
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: Loaders.concat([
			{
				test: /\.scss$/,
				loader: 'style!css!sass!resolve-url!sass?sourceMap&sourceComments'
			},
			{
				test: /\.css$/,
				loader: 'style!css?importLoaders=1'
			}
		])
	}
};