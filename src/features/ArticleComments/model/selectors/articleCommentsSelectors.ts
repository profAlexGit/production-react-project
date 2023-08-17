import { type StateSchema } from '@app/providers/StoreProvider';
// import { type Comment } from '@entities/Comment';

// export const getArticleCommentsData = (state: StateSchema): Comment[] => state.articleComments?.data || [];

export const getArticleCommentIsLoading = (state: StateSchema): boolean => !!state.articleComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema): string | null => state.articleComments?.error || null;
