import { type ArticleDetailsSchema } from '@entities/Article/model/types/articleDetailsSchema';
import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '@entities/Article/model/service/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
  isLoading: false
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = undefined;
      });
  }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
