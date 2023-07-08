import { BrowserRouter } from 'react-router-dom';

export function RouteDecorator (StoryComponent): JSX.Element {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
}
