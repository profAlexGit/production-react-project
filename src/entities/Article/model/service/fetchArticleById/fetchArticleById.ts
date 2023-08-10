import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Article } from '../../types/article';
import { type ThunkConfig } from '@app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, ThunkApi) => {
    const {
      extra,
      rejectWithValue
    } = ThunkApi;

    try {
      if (!id) {
        throw new Error();
      }

      const response = await extra.api.get(`/articles/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('Не удалось загрузить статью');
    }
  }
);
