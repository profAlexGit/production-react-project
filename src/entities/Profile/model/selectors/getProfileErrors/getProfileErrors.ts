import { type StateSchema } from '@app/providers/StoreProvider';
import { type ValidationProfileError } from '../../types/profile';

export const getProfileErrors = (state: StateSchema): ValidationProfileError[] | null => state.profile?.validateError || null;
