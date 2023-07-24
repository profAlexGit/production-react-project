import { configureStore, type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { counterReducer } from '@entities/Counter';
import { userReducer } from '@entities/User';
import { loginReducer } from '@features/AuthByUsername';

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
