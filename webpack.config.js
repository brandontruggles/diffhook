var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'minify']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
}
