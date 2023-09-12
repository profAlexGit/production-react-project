import { createAsyncThunk } from '@reduxjs/toolkit';
import { type Profile } from '@entities/Profile';
import { type ThunkConfig } from '@app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidationProfileError } from '@entities/Profile/model/types/profile';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidationProfileError[]>>(
  'profile/update',
  async (profileId, ThunkApi) => {
    const {
      extra,
      rejectWithValue,
      getState
    } = ThunkApi;
    try {
      const formData = getState().profile?.form;

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const result = await extra.api.patch(`/profile/${profileId}`, formData);

      if (!result.data) {
        throw new Error();
      }

      return result.data;
    } catch (e) {
      return rejectWithValue([ValidationProfileError.SERVER_ERROR]);
    }
  }
);
