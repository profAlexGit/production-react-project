import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Article } from '@entities/Article';
import { type ThunkConfig } from '@app/providers/StoreProvider';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, ThunkApi) => {
    const {
      rejectWithValue,
      extra
    } = ThunkApi;

    try {
      const res = await extra.api.get('/articles', {
        params: {
          _expand: 'user'
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
