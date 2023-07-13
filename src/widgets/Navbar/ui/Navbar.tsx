import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { LoginModal } from '@features/AuthByUsername';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={styles.links}
        onClick={onShowModal }
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  );
};
