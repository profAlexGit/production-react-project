import type { Profile, ProfileSchema } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profileSlice';

export {
  type Profile,
  type ProfileSchema,
  profileReducer,
  profileActions
};
