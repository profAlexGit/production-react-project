import { Theme } from '../../../app/providers/ThemeProvider';

export function ThemeDecorator (theme: Theme = Theme.LIGHT) {
  return (StoryComponent): JSX.Element => (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
}
