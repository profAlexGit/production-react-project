import { type DeepPartial } from 'redux';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { type Article, articleDetailsReducer, fetchArticleById } from '@entities/Article';

const initialArticleDetailsState: DeepPartial<ArticleDetailsSchema> = {
  isLoading: false
};

describe('articleDetailsSlice.test', () => {
  test('fetchArticleDetails.pending', () => {
    const result = articleDetailsReducer(
      initialArticleDetailsState as ArticleDetailsSchema,
      fetchArticleById.pending
    );

    expect(result.isLoading).toBe(true);
  });

  test('fetchArticleDetails.fulfilled', () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      ...initialArticleDetailsState,
      isLoading: true
    };

    const articleResult: DeepPartial<Article> = {
      title: 'some title'
    };

    const result = articleDetailsReducer(
      initialState as ArticleDetailsSchema,
      fetchArticleById.fulfilled(articleResult as Article, '', '')
    );

    expect(result.isLoading).toBe(false);
    expect(result.data).toEqual(articleResult);
  });

  test('fetchArticleDetails.rejected', () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      ...initialArticleDetailsState,
      isLoading: true
    };

    const result = articleDetailsReducer(
      initialState as ArticleDetailsSchema,
      fetchArticleById.rejected
    );

    console.log(result);

    expect(result.isLoading).toBe(false);
  });
});
