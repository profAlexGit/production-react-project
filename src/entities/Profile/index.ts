import type { Profile, ProfileSchema } from './model/types/profile';
import { profileReducer, profileActions } from './model/slice/profileSlice';
import { fetchProfileData } from './model/service/fetchProfileData/fetchProfileData';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
  type Profile,
  type ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  getProfileError,
  getProfileData,
  getProfileIsLoading,
  ProfileCard
};
