import type { FC } from 'react';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type AppRouteProps, routeConfig } from '@shared/config/routeConfig';
import { PageLoader } from '@widgets/PageLoader';
import { RequireAuth } from '@app/providers/router/ui/RequireAuth';

export const AppRouter: FC = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
