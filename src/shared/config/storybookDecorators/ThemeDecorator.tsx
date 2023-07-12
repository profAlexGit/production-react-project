import { Theme } from '@app/providers/ThemeProvider';
import { type StoryFn } from '@storybook/react';

export function ThemeDecorator (theme: Theme = Theme.LIGHT) {
  return (StoryComponent: StoryFn): JSX.Element => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
}
