import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => await import('./ArticlesPage')
  .then((module) => ({ default: module.ArticlesPage })));
