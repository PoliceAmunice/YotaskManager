const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = (process.env.NODE_ENV == 'development')? true : false;

module.exports = {
	entry: resolve(__dirname, 'src/index.js'),
	output:
	{
		path: resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/',
		pathinfo: false,
		clean: true
	},

	resolve:
	{
		alias:
		{
			Assets: resolve(__dirname, 'src/assets/'),
			Styles: resolve(__dirname, 'src/styles/'),
			Components: resolve(__dirname, 'src/components'),
			Buttons: resolve(__dirname, 'src/components/buttons'),
		},
	},

	module:
	{
		rules:
		[
			{
				test: /\.(js|jsx)$/,
				// exclude: /node_modules/,
				include: resolve(__dirname, 'src'),
				use:
				{
					loader: "babel-loader",
					options:
					{
						presets:
						[
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				 }
			},
			{
				test: /\.(css|s[ac]ss)$/,
				include: [resolve(__dirname, 'src/styles')],
				use: 
				[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				include: [resolve(__dirname, 'src/assets/fonts')],
				type: 'asset/resource',
			},
			{
				test: /\.svg$/i,
				include: [resolve(__dirname, 'src/assets')],
				type: 'asset/inline',
			},
		]
	},

	plugins:
	[
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'src/index.html'),
			favicon: resolve(__dirname, 'src/assets/icons/favicon.svg'),
			hash: !isDev,
		}),
	],

	devServer:
	{
		contentBase: resolve(__dirname, 'public'),
		historyApiFallback: true,
		compress: true,
		port: 5000,
		hot: true
	},

	optimization:
	{
		minimize: !isDev,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
	}
}
