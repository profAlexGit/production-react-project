import { type DeepPartial } from 'redux';
import { type ArticlesPageSchema } from '@pages/ArticlesPage';
import { articlesPageReducer } from '@pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticlesList } from '@pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList';
import { type Article } from '@entities/Article';

const initialState: DeepPartial<ArticlesPageSchema> = {
  isLoading: false,
  entities: {},
  ids: [],
  error: null
};

describe('articlePageSlice.test', () => {
  it('fetchArticlesList.pending', () => {
    const result: ArticlesPageSchema = articlesPageReducer(
      initialState as ArticlesPageSchema,
      fetchArticlesList.pending
    );

    expect(result.isLoading).toBe(true);
  });

  it('fetchArticlesList.fulfilled', () => {
    const responseData: Array<DeepPartial<Article>> = [
      {
        id: '1',
        title: 'some title'
      }
    ];

    const result: ArticlesPageSchema = articlesPageReducer(
      initialState as ArticlesPageSchema,
      fetchArticlesList.fulfilled(responseData as Article[], '', { page: 1 }, '')
    );

    expect(result.isLoading).toBe(false);
    expect(result.ids.length).toBe(1);
    expect(result.entities).toEqual({ 1: responseData[0] });
  });

  it('fetchArticlesList.rejected', () => {
    const result: ArticlesPageSchema = articlesPageReducer(
      initialState as ArticlesPageSchema,
      fetchArticlesList.rejected({ name: 'error', message: 'error' }, '', { page: 1 }, 'some error')
    );

    expect(result.isLoading).toBe(false);
    expect(result.error).toBe('some error');
  });
});
