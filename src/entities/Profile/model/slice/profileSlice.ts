import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Profile, type ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { type DeepPartial } from 'redux';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
  form: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state: ProfileSchema, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state: ProfileSchema) => {
      if (!state.data) {
        return;
      }

      state.form = { ...state.data };
      state.readonly = true;
      state.error = undefined;
      state.validateError = [];
    },
    updateProfile: (state: ProfileSchema, action: PayloadAction<DeepPartial<Profile>>) => {
      if (!state.form) {
        return;
      }

      state.form = {
        ...state.form,
        ...action.payload
      };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state: ProfileSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action) => {
        state.error = undefined;
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state: ProfileSchema, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, (state: ProfileSchema) => {
        state.validateError = [];
        state.isLoading = true;
        state.readonly = true;
      })
      .addCase(updateProfileData.fulfilled, (state: ProfileSchema, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(updateProfileData.rejected, (state: ProfileSchema, action) => {
        state.validateError = action.payload;
        state.isLoading = false;
        state.readonly = false;
      });
  }
});

export const {
  actions: profileActions,
  reducer: profileReducer
} = profileSlice;
