import { type EntityState } from '@reduxjs/toolkit';
import { type Article } from '@entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;

  page: number;
  limit: number;
  hasMore: boolean;

  _inited: boolean;
}
