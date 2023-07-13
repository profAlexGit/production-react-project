import { configureStore, type EnhancedStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { counterReducer } from '@entities/Counter';
import { userReducer } from '@entities/User';

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
