import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const {
      getState,
      dispatch
    } = thunkApi;

    const isInited = getArticlesPageInited(getState());

    if (!isInited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }));
    }
  }
);
