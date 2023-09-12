import { type DeepPartial } from 'redux';
import { type ArticleCommentsSchema } from '@features/ArticleComments';
import { articleCommentsReducer } from '@features/ArticleComments/model/slice/articleCommentsSlice';
import {
  fetchCommentsByArticleId
} from '@features/ArticleComments/model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type Comment } from '@entities/Comment';

const initialState: DeepPartial<ArticleCommentsSchema> = {
  isLoading: false,
  error: null,
  ids: [],
  entities: {}
};

describe('articleCommentsSlice.test', () => {
  it('fetchCommentsByArticleId.pending', () => {
    const result = articleCommentsReducer(
      initialState as ArticleCommentsSchema,
      fetchCommentsByArticleId.pending
    );

    expect(result.isLoading).toBe(true);
  });

  it('fetchCommentsByArticleId.fulfilled', () => {
    const resultComments: Comment[] = [
      {
        id: '1',
        text: 'comment',
        user: {
          id: '12',
          username: 'username'
        }
      }
    ];

    const result = articleCommentsReducer(
      initialState as ArticleCommentsSchema,
      fetchCommentsByArticleId.fulfilled(resultComments, '', '')
    );

    expect(result.isLoading).toBe(false);
    expect(result.error).toBe(null);
    expect(result.ids).toEqual(['1']);
    expect(result.entities).toEqual({ 1: resultComments[0] });
  });

  it('fetchCommentsByArticleId.rejected', () => {
    const result = articleCommentsReducer(
      initialState as ArticleCommentsSchema,
      fetchCommentsByArticleId.rejected({ name: 'error', message: 'error' }, '', '', 'some error')
    );

    expect(result.isLoading).toBe(false);
    expect(result.error).toBe('some error');
  });
});
