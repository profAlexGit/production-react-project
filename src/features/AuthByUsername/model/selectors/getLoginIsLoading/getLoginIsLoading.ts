import { type StateSchema } from '@app/providers/StoreProvider';
import { type LoginSchema } from '@features/AuthByUsername';

export const getLoginIsLoading = (state: StateSchema): LoginSchema['isLoading'] => !!state.loginForm?.isLoading;
