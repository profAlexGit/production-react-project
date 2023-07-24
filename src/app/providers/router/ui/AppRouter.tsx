import type { FC } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@shared/config/routeConfig';
import { PageLoader } from '@widgets/PageLoader';

export const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="pageWrapper">
              {element}
            </div>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);
