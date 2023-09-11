import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Article } from '@entities/Article';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, ThunkApi) => {
    const {
      page = 1
    } = props;

    const {
      rejectWithValue,
      extra,
      getState
    } = ThunkApi;

    const limit = getArticlesPageLimit(getState());

    try {
      const res = await extra.api.get('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      });

      if (!res.data) {
        throw new Error('Не удалось загрузить статьи');
      }

      return res.data;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить статьи');
    }
  }
);
