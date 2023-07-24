import {
  userReducer,
  userActions,
  userSlice
} from './model/slice/userSlice';
import { type UserSchema, type User } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
  userReducer,
  userActions,
  userSlice,
  type User,
  type UserSchema,
  getUserAuthData
};
