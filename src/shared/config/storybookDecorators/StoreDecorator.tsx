import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { type DeepPartial } from 'redux';

export function StoreDecorator (state: DeepPartial<StateSchema>) {
  return (StoryComponent: StoryFn): JSX.Element => (
    <StoreProvider initialState={state as StateSchema}>
      <StoryComponent />
    </StoreProvider>
  );
}
