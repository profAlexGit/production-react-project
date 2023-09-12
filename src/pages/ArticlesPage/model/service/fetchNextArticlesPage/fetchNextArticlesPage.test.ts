import { type DeepPartial } from 'redux';
import { type ArticlesPageSchema } from '@pages/ArticlesPage';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesList.test', () => {
  it('success fetch next articles page', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      hasMore: true,
      page: 1,
      ids: [],
      entities: {},
      isLoading: false,
      limit: 4,
      error: null
    };

    const thunk = new TestAsyncThunk(
      fetchNextArticlesPage,
      { articlesPage: state as ArticlesPageSchema }
    );

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalled();
    expect(fetchArticlesList).toHaveBeenCalled();
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 2 });
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
  });

  it('no request when no more', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      hasMore: false,
      page: 1,
      ids: [],
      entities: {},
      isLoading: false,
      limit: 4,
      error: null
    };

    const thunk = new TestAsyncThunk(
      fetchNextArticlesPage,
      { articlesPage: state as ArticlesPageSchema }
    );

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalled();
    expect(fetchArticlesList).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
