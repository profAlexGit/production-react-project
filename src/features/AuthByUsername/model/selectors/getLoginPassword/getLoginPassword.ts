import { type StateSchema } from '@app/providers/StoreProvider';
import { type LoginSchema } from '@features/AuthByUsername';

export const getLoginPassword = (state: StateSchema): LoginSchema['password'] => state.loginForm?.password || '';
