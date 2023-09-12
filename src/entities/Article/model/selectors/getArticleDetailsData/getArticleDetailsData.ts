import { type Article } from '../../types/article';
import { type StateSchema } from '@app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateSchema): Article | null => state.articleDetails?.data || null;
