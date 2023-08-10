import { type StateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema): string | null => {
  return state.articleDetails?.error || null;
};
