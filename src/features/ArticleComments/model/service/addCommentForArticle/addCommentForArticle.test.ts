import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type UserSchema } from '@entities/User';
import { type Article } from '@entities/Article';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { addCommentForArticle } from '@features/ArticleComments/model/service/addCommentForArticle/addCommentForArticle';
import { type Comment } from '@entities/Comment';

describe('addCommentForAtricle.test', () => {
  it('success add comment', async () => {
    const authData: UserSchema = {
      authData: {
        id: '1',
        username: 'username'
      }
    };

    const articleState: DeepPartial<Article> = {
      id: '123'
    };

    const state: DeepPartial<StateSchema> = {
      user: authData,
      articleDetails: {
        data: articleState as Article,
        isLoading: false
      }
    };

    const newComment: DeepPartial<Comment> = {
      id: '1',
      user: authData.authData,
      text: 'comment'
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    thunk.api.post.mockReturnValue(Promise.resolve({
      data: newComment as Comment
    }));

    const result = await thunk.callThunk('comment');
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  it('error with no userId', async () => {
    const authData: DeepPartial<UserSchema> = {};

    const articleState: DeepPartial<Article> = {
      id: '123'
    };

    const state: DeepPartial<StateSchema> = {
      user: authData,
      articleDetails: {
        data: articleState as Article,
        isLoading: false
      }
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    const result = await thunk.callThunk('comment');
    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось отправить комментарий');
  });

  it('error with no articleId', async () => {
    const authData: UserSchema = {
      authData: {
        id: '1',
        username: 'username'
      }
    };

    const articleState: DeepPartial<Article> = {};

    const state: DeepPartial<StateSchema> = {
      user: authData,
      articleDetails: {
        data: articleState as Article,
        isLoading: false
      }
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    const result = await thunk.callThunk('comment');
    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось отправить комментарий');
  });

  it('error with no comment text', async () => {
    const authData: UserSchema = {
      authData: {
        id: '1',
        username: 'username'
      }
    };

    const articleState: DeepPartial<Article> = {
      id: '123'
    };

    const state: DeepPartial<StateSchema> = {
      user: authData,
      articleDetails: {
        data: articleState as Article,
        isLoading: false
      }
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    const result = await thunk.callThunk('');
    expect(thunk.api.post).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Комментарий не может быть пустым');
  });

  it('error send comment', async () => {
    const authData: UserSchema = {
      authData: {
        id: '1',
        username: 'username'
      }
    };

    const articleState: DeepPartial<Article> = {
      id: '123'
    };

    const state: DeepPartial<StateSchema> = {
      user: authData,
      articleDetails: {
        data: articleState as Article,
        isLoading: false
      }
    };

    const thunk = new TestAsyncThunk(addCommentForArticle, state);

    thunk.api.post.mockReturnValue(Promise.resolve({
      status: 500
    }));

    const result = await thunk.callThunk('comment');
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось отправить комментарий');
  });
});
