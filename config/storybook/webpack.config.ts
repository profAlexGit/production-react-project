import type { Configuration, RuleSetRule } from 'webpack';
import { DefinePlugin } from 'webpack';
import { type BuildPaths } from '../types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { pathAlias } from '../build/pathAlias/pathAlias';

export default ({ config }: { config: Configuration }): Configuration => {
  if (!config) {
    return {};
  }
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  if (!config.resolve) {
    config.resolve = {
      modules: [],
      extensions: [],
      alias: []
    };
  }
  if (!config.resolve.modules) {
    config.resolve.modules = [];
  }

  if (!config.resolve.extensions) {
    config.resolve.extensions = [];
  }

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...config.resolve.alias,
    ...pathAlias(paths.src)
  };

  if (!config.module) {
    config.module = {
      rules: [] as RuleSetRule[]
    };
  }

  if (!config.module.rules) {
    config.module.rules = [] as RuleSetRule[];
  }

  config.module.rules = (config.module.rules as RuleSetRule[]).map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {
        ...rule,
        exclude: /\.svg$/i
      };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  });

  config.module.rules.push(buildCssLoaders(true));

  config?.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('api')
  }));

  return config;
};
