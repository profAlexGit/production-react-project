import type { BuildOptions } from '../types/config';
import type { ResolveOptions } from 'webpack';
import { pathAlias } from './pathAlias/pathAlias';

export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: pathAlias(options.paths.src)
  };
}
