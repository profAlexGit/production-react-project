import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, type AppDispatch } from './config/store';
import type { StateSchema, ReduxStoreWithManager, ThunkExtraArguments, ThunkConfig } from './config/stateSchema';

export {
  StoreProvider,
  createReduxStore,
  type StateSchema,
  type ReduxStoreWithManager,
  type AppDispatch,
  type ThunkExtraArguments,
  type ThunkConfig
};
