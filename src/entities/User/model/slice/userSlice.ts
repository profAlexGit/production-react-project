import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema, type User } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@shared/const/localstorage';

const initialState: UserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state: UserSchema) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  }
});

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice;
