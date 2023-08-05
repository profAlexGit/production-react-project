import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { BuildOptions } from '../types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export function buildPlugins ({ paths, isDev, apiURL, project }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project)
    })
  ];

  if (isDev) {
    return [
      ...plugins,
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerPort: 8080
      }),
      new ReactRefreshWebpackPlugin()
    ];
  }

  return plugins;
}
