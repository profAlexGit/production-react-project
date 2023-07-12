import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import styles from './navbar.module.scss';
import { Modal } from '@shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal }
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid autem cum dignissimos dolorum ducimus excepturi expedita inventore ipsum minima nisi optio perferendis perspiciatis quibusdam quo repellat sit, voluptate voluptatibus!
      </Modal>
    </div>
  );
};
