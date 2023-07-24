import type { FC } from 'react';
import { Suspense, useEffect } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTheme } from '@app/providers/ThemeProvider';
import { AppRouter } from '@app/providers/router';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { PageLoader } from '@widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from '@entities/User';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar/>
        <div className="contentPage">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};
