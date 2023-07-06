import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from '../types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

	const { isDev } = options;

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};

	const babelLoader = {
		test: /\.(ts|js|tsx|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader'
		}
	};

	const cssLoaders = {
		test: /\.s[ac]ss$/,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					},

				}
			},
			'sass-loader'
		]
	};

	return [
		babelLoader,
		typescriptLoader,
		cssLoaders,
		svgLoader,
		fileLoader
	];
}
