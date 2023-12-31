import { type StateSchema } from '@app/providers/StoreProvider';
import { type Profile } from '@entities/Profile';

export const getProfileData = (state: StateSchema): Profile | null => state.profile?.data || null;
