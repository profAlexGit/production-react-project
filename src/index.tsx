import { createRoot } from 'react-dom/client';
import { App } from '@app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';
import '@app/styles/index.scss';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { StoreProvider } from '@app/providers/StoreProvider';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  // <BrowserRouter>
  //   <StoreProvider>
  //     <ErrorBoundary>
  //       <ThemeProvider>
  //         <App/>
  //       </ThemeProvider>
  //     </ErrorBoundary>
  //   </StoreProvider>
  // </BrowserRouter>
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
