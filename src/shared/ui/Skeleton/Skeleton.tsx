import styles from './skeleton.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type CSSProperties, memo } from 'react';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    borderRadius,
    height,
    width
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius
  };

  return (
    <div
      className={classNames(styles.skeleton, {}, [className])}
      style={style}
    />
  );
});
