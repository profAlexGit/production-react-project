import type { Configuration, RuleSetRule } from 'webpack';
import { type BuildPaths } from '../types/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

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
      extensions: []
    };
  }
  if (!config.resolve.modules) {
    config.resolve.modules = [];
  }

  if (!config.resolve.extensions) {
    config.resolve.extensions = [];
  }

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

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

  return config;
};
