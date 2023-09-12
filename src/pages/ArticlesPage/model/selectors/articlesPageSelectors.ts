import { type StateSchema } from '@app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema): boolean => !!state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema): string | null => state.articlesPage?.error || null;

export const getArticlesPageLimit = (state: StateSchema): number => state.articlesPage?.limit || 10;

export const getArticlesPageNumber = (state: StateSchema): number => {
  return state.articlesPage?.page || 1;
};

export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlesPage?.hasMore || false;

export const getArticlesPageInited = (state: StateSchema): boolean => state.articlesPage?._inited || false;
