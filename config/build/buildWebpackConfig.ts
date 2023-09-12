import type webpack from 'webpack';
import type { BuildOptions } from '../types/config';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
