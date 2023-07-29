import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import { type Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, ThunkApi) => {
    const {
      extra,
      rejectWithValue
    } = ThunkApi;

    try {
      const response = await extra.api.get<Profile>('/profile');
      if (!response.data) {
        throw new Error();
      }

      // dispatch(profileActions.setProfile(response.data));
      return response.data;
    } catch (e) {
      return rejectWithValue('Ошибка запроса профиля');
    }
  });
