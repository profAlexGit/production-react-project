import type { FC } from 'react';
import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@shared/config/routeConfig';
import { PageLoader } from '@widgets/PageLoader';
import { getUserAuthData } from '@entities/User';
import { useSelector } from 'react-redux';

export const AppRouter: FC = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }
      return true;
    });
  }, [isAuth]);

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
