import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../service/fetchCommentsByArticleId';
import { type ArticleCommentsSchema } from '../types/ArticleCommentsSchema';
import { type Comment } from '@entities/Comment';
import { type StateSchema } from '@app/providers/StoreProvider';

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState()
);

const initialState: ArticleCommentsSchema = articleCommentsAdapter.getInitialState<ArticleCommentsSchema>({
  error: null,
  isLoading: false,
  ids: [],
  entities: {}
});

export const articleCommentsSlice = createSlice({
  name: 'articleCommentsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state: ArticleCommentsSchema) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state: ArticleCommentsSchema, action) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state: ArticleCommentsSchema, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  }
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
export const { actions: articleCommentsActions } = articleCommentsSlice;
