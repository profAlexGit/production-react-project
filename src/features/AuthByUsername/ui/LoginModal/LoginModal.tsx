import { type FC } from 'react';
import styles from './loginModal.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { Modal } from '@shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(styles.loginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
