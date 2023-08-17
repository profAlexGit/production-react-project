import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Comment } from '@entities/Comment/model/types/comment';
import { type ThunkConfig } from '@app/providers/StoreProvider';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string, ThunkConfig<string>>(
  'comment/fetchCommentsByArticleId',
  async (id, ThunkApi) => {
    const {
      extra,
      rejectWithValue
    } = ThunkApi;

    if (!id) {
      rejectWithValue('Не удалось загрузить комментарии');
    }

    try {
      const res = await extra.api.get('/comments', {
        params: {
          articleId: id,
          _expand: 'user'
        }
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (e) {
      rejectWithValue('Не удалось загрузить комментарии');
    }
  }
);
