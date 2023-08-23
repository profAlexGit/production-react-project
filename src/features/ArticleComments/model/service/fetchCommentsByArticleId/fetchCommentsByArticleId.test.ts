import { type Comment } from '@entities/Comment';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
  fetchCommentsByArticleId
} from '@features/ArticleComments/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';

describe('fetchCommentsByArticleId.test', () => {
  it('success fetch comments', async () => {
    const comments: Comment[] = [
      {
        id: '1',
        text: 'comment',
        user: { id: '1', username: 'Brad' }
      }
    ];

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: comments
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.api.get).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(comments);
  });

  it('failed with no article id', async () => {
    const comments: Comment[] = [
      {
        id: '1',
        text: 'comment',
        user: { id: '1', username: 'Brad' }
      }
    ];

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: comments
    }));

    const result = await thunk.callThunk('');

    expect(thunk.api.get).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('Не удалось загрузить комментарии');
  });

  it('failed with server', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 500
    }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('Не удалось загрузить комментарии');
  });
});
