import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from '@entities/Profile';
import { type ThunkConfig } from '@app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/update',
  async (_, ThunkApi) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = ThunkApi;
    try {
      const formData = getState().profile?.form;

      if (!formData) {
        throw new Error();
      }

      const result = await extra.api.patch('/profile', formData);

      if (!result.data) {
        throw new Error();
      }

      return result.data;
    } catch (e) {
      return rejectWithValue('Не удалось обновить профиль');
    }
  }
);
