import { getArticleDetailsIsLoading } from './getArticleDetailsIsLoading';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type ArticleDetailsSchema } from '../../types/articleDetailsSchema';

describe('getArticleDetailsIsLoading.test', () => {
  test('get false', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false
    };

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsIsLoading(state as StateSchema);

    expect(res).toBe(false);
  });

  test('get true', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    };

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsIsLoading(state as StateSchema);

    expect(res).toBe(true);
  });
});
