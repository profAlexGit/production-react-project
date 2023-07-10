import type { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>

    </div>
  );
};
