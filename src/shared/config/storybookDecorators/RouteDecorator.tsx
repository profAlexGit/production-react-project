import { BrowserRouter } from 'react-router-dom';
import { type StoryFn } from '@storybook/react';

export function RouteDecorator (StoryComponent: StoryFn): JSX.Element {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
}
