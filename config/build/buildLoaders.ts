import type webpack from 'webpack';
import type { BuildOptions } from '../types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
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

  const cssLoaders = buildCssLoaders(isDev);

  return [
    babelLoader,
    typescriptLoader,
    cssLoaders,
    svgLoader,
    fileLoader
  ];
}
