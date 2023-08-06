import { type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { Navigate, useLocation } from 'react-router';
import { RoutePath } from '@shared/config/routeConfig';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps): ReactNode => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (isAuth) {
    return <>
      { children }
    </>;
  }

  return (
    <Navigate to={RoutePath.main} state={{ from: location }} replace/>
  );
};
