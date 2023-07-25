import { type StateSchema } from '@app/providers/StoreProvider';
import { type LoginSchema } from '@features/AuthByUsername';

export const getLoginUsername = (state: StateSchema): LoginSchema['username'] => state.loginForm?.username || '';
