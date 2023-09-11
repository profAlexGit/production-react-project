import { type FC, type MutableRefObject, useRef } from 'react';
import styles from './pageWrapper.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageWrapperProps {
  className?: string;
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

export const PageWrapper: FC<PageWrapperProps> = (props: PageWrapperProps) => {
  const {
    className,
    children,
    onScrollEnd
  } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.pageWrapper, {}, [className])}
    >
      {children}
      <div
        className={styles.trigger}
        ref={triggerRef}
      />
    </section>
  );
};
