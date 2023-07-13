import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type UserSchema, type User } from '@entities/User/model/types/user';

const initialState: UserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload;
    }
  }
});

export const {
  actions: userActions,
  reducer: userReducer
} = userSlice;
