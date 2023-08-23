import { type StateSchema } from '@app/providers/StoreProvider';

export const getArticleCommentIsLoading = (state: StateSchema): boolean => !!state.articleComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema): string | null => state.articleComments?.error || null;
