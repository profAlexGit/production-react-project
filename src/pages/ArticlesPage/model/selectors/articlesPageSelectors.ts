import { type StateSchema } from '@app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema): boolean => !!state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema): string | null => state.articlesPage?.error || null;
