import { getArticleDetailsData } from './getArticleDetailsData';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type ArticleDetailsSchema } from '../../types/articleDetailsSchema';
import { type Article } from '../../types/article';

const mockedArticleDetailsData: DeepPartial<Article> = {
  title: 'Some title',
  id: '1'
};

describe('getArticleDetailsData.test', () => {
  test('success get data', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {
      data: mockedArticleDetailsData as Article
    };

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsData(state as StateSchema);

    expect(res).toEqual(mockedArticleDetailsData);
  });

  test('get null', () => {
    const articleDetailsState: DeepPartial<ArticleDetailsSchema> = {};

    const state: DeepPartial<StateSchema> = { articleDetails: articleDetailsState as ArticleDetailsSchema };

    const res = getArticleDetailsData(state as StateSchema);

    expect(res).toBeNull();
  });
});
