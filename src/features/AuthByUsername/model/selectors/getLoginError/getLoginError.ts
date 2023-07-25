import { type StateSchema } from '@app/providers/StoreProvider';
import { type LoginSchema } from '@features/AuthByUsername';

export const getLoginError = (state: StateSchema): LoginSchema['error'] => state.loginForm?.error || '';
