import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Comment } from '@entities/Comment';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import { getUserAuthData } from '@entities/User';
import { getArticleDetailsData } from '@entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleComments/addCommentsForArticle',
  async (text, thunkApi) => {
    const {
      extra,
      dispatch,
      rejectWithValue,
      getState
    } = thunkApi;

    if (!text) {
      return rejectWithValue('Комментарий не может быть пустым');
    }

    const userId = getUserAuthData(getState())?.id;
    const articleId = getArticleDetailsData(getState())?.id;

    if (!userId || !articleId) {
      return rejectWithValue('Не удалось отправить комментарий');
    }

    try {
      const res = await extra.api.post<Comment>('/comment/', {
        text,
        articleId,
        userId
      });

      if (!res.data) {
        return rejectWithValue('Не удалось отправить комментарий');
      }

      dispatch(fetchCommentsByArticleId(articleId));
      return res.data;
    } catch (e) {
      console.log('ERROR!');
      throw new Error('Не удалось отправить комментарий');
    }
  }
);
