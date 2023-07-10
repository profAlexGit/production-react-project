import type { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation('navigation');

  return (
    <div className={classNames(styles.navbar, {}, [className])}>

    </div>
  );
};
