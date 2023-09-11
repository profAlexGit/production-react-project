import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';
import { type Article } from '@entities/Article';
import { type DeepPartial } from 'redux';
import { type ArticlesPageSchema } from '@pages/ArticlesPage';

const state: DeepPartial<ArticlesPageSchema> = {
  limit: 4
};

describe('fetchArticlesList.test', () => {
  it('success fetch articles list', async () => {
    const responseData: Array<DeepPartial<Article>> = [
      {
        id: '1',
        title: 'some title'
      }
    ];
    const thunk = new TestAsyncThunk(fetchArticlesList, { articlesPage: state as ArticlesPageSchema });

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: responseData
    }));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(responseData);
  });

  it('failed fetch articles list with no data', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, { articlesPage: state as ArticlesPageSchema });

    thunk.api.get.mockReturnValue(Promise.resolve({}));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Не удалось загрузить статьи');
  });

  it('failed fetch articles list with request error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, { articlesPage: state as ArticlesPageSchema });

    thunk.api.get.mockReturnValue(Promise.reject(new Error()));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Не удалось загрузить статьи');
  });
});
