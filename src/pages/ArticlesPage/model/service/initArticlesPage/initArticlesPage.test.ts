import { type DeepPartial } from 'redux';
import { type ArticlesPageSchema } from '../../types/articlesPageSchema';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from '@pages/ArticlesPage/model/service/initArticlesPage/initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  it('atricles page not inited before', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      _inited: false
    };

    const thunk = new TestAsyncThunk(initArticlesPage, { articlesPage: state as ArticlesPageSchema });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  it('atricles page inited yet', async () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      _inited: true
    };

    const thunk = new TestAsyncThunk(initArticlesPage, { articlesPage: state as ArticlesPageSchema });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
