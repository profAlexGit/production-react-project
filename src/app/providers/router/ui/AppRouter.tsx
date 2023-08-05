import type { FC } from 'react';
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@shared/config/routeConfig';
import { PageLoader } from '@widgets/PageLoader';

export const AppRouter: FC = memo(() => {
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      return true;
    });
  }, []);

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {routes.map(({
          element,
          path
        }) => (
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
});
