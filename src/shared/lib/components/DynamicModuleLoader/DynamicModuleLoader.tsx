import { type FC, type PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type ReduxStoreWithManager } from '@app/providers/StoreProvider';
import { type StateSchemaKey } from '@app/providers/StoreProvider/config/stateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps extends PropsWithChildren {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    (Object.entries(reducers) as ReducersListEntry[])
      .forEach(([name, reducer]) => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });

    if (removeAfterUnmount) {
      return () => {
        (Object.entries(reducers) as ReducersListEntry[])
          .forEach(([key]) => {
            store.reducerManager.remove(key);
            dispatch({ type: `@DESTROY ${key} reducer` });
          });
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};
