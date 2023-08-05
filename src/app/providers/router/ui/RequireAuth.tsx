import { type ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@entities/User';
import { Navigate } from 'react-router';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps): ReactNode => {
  const isAuth = useSelector(getUserAuthData);

  if (isAuth) {
    return <>
      { children }
    </>;
  }

  return (
    <Navigate to={'/'}/>
  );
};
