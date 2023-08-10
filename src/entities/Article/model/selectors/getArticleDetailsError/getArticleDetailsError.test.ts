import { getArticleDetailsError } from './getArticleDetailsError';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type ArticleDetailsSchema } from '../../types/articleDetailsSchema';

describe('getArticleDetailsError.test', () => {
  test('success get error', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {
      error: 'some error'
    };

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsError(state as StateSchema);

    expect(res).toBe('some error');
  });

  test('get null', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {};

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsError(state as StateSchema);

    expect(res).toBeNull();
  });
});
