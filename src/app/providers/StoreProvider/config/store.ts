import { configureStore, type EnhancedStore } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { counterReducer } from '@entities/Counter';

export function createReduxStore (initialState?: StateSchema): EnhancedStore {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}
