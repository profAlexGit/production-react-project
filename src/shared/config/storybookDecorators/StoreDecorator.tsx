import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { type DeepPartial } from 'redux';
import { type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@features/AuthByUsername/model/slice/loginSlice';
import { type LoginSchema } from '@features/AuthByUsername';
import { profileReducer, type ProfileSchema } from '@entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer as Reducer<LoginSchema | undefined>,
  profile: profileReducer as Reducer<ProfileSchema | undefined>
};

export function StoreDecorator (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) {
  return (StoryComponent: StoryFn): JSX.Element => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
}
