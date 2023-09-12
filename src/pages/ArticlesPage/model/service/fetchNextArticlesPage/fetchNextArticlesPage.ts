import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading,
  getArticlesPageNumber
} from '@pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '@pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '@pages/ArticlesPage/model/slice/articlePageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const {
      getState,
      dispatch
    } = thunkApi;

    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());
    const page = getArticlesPageNumber(getState());

    if (hasMore && !isLoading) {
      dispatch(fetchArticlesList({ page: page + 1 }));
      dispatch(articlesPageActions.setPage(page + 1));
    }
  }
);
