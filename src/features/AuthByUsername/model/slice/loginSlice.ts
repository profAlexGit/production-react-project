import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type LoginSchema } from '../types/loginShema';
import { loginByUsername } from '../service/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    clearForm: (state: LoginSchema) => {
      state.username = '';
      state.password = '';
      state.error = undefined;
      state.isLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state: LoginSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.rejected, (state: LoginSchema, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginByUsername.fulfilled, (state: LoginSchema, action) => {
        state.isLoading = false;
      });
  }
});

export const {
  actions: loginActions,
  reducer: loginReducer
} = loginSlice;
