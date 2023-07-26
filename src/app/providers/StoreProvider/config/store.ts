import { configureStore, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { counterReducer } from '@entities/Counter';
import { userReducer } from '@entities/User';
import { createReducerManager } from './reducerManager';
import { type AnyAction, type DeepPartial } from 'redux';

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): EnhancedStore {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({

    reducer: reducerManager.reduce as Reducer<StateSchema, AnyAction>,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
