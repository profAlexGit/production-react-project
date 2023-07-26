import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state: ProfileSchema, action: PayloadAction<Profile>) => {}
  }
});

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
