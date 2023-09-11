import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider';
import { type Article } from '@entities/Article';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../service/fetchArticlesList/fetchArticlesList';

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
  entities: {},
  hasMore: true,
  limit: 4,
  page: 1
});

export const articlePageSlice = createSlice({
  name: 'articlePage',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        articlePageAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  }
});

export const { reducer: articlesPageReducer } = articlePageSlice;
export const { actions: articlesPageActions } = articlePageSlice;
