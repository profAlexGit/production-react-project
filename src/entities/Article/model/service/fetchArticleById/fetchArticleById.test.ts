import { fetchArticleById } from './fetchArticleById';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { type DeepPartial } from 'redux';
import { type Article } from '../../types/article';

describe('fetchArticleById.test', () => {
  test('success fetch article', async () => {
    const responseData: DeepPartial<Article> = {
      title: 'some title'
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: responseData
    }));

    const res = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(responseData);
  });

  test('failed fetch article with no id', async () => {
    const responseData: DeepPartial<Article> = {
      title: 'some title'
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: responseData
    }));

    const res = await thunk.callThunk('');

    expect(thunk.api.get).not.toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).not.toEqual(responseData);
    expect(res.payload).toBe('Не удалось загрузить статью');
  });

  test('failed fetch article', async () => {
    const responseData: DeepPartial<Article> = {
      title: 'some title'
    };

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 500
    }));

    const res = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).not.toEqual(responseData);
    expect(res.payload).toBe('Не удалось загрузить статью');
  });
});
