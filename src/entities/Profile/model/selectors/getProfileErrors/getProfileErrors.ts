import { type StateSchema } from '@app/providers/StoreProvider';
import { type ValidationProfileError } from '../../types/profile';

export const getProfileErrors = (state: StateSchema): ValidationProfileError[] => state.profile?.validateError || [];
