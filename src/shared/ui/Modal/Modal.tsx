import { type FC, type ReactNode, type MouseEvent, useRef, useState, useEffect, useCallback } from 'react';
import styles from './modal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    if (!isOpen) {
      window.removeEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const onContentClick = (e: MouseEvent): void => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing
  };

  return (
    <Portal>
      <div
        className={classNames(styles.modal, mods, [className])}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};
