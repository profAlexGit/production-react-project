import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type Article } from '@entities/Article';
import { type ArticlesPageSchema } from '@pages/ArticlesPage';
import { fetchArticlesList } from '@pages/ArticlesPage/model/service/fetchArticlesList';

const articlePageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = articlePageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlePageAdapter.getInitialState()
);

const initialState: ArticlesPageSchema = articlePageAdapter.getInitialState<ArticlesPageSchema>({
  error: null,
  isLoading: false,
  ids: [],
  entities: {}
});

export const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        articlePageAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  }
});

export const { reducer: articlesPageReducer } = articlePageSlice;
export const { actions: articlesPageActions } = articlePageSlice;
