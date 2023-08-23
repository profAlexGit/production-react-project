import { lazy } from 'react';

export const ArticleCommentsAsync = lazy(async () => await import('./ArticleComments')
  .then(module => ({ default: module.ArticleComments })));
