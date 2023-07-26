import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from '@shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';
import { memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...rest}
    >
      {children}
    </Link>
  );
});
