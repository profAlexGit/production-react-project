import { useMemo, type FC, type CSSProperties } from 'react';
import styles from './avatar.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    size,
    alt
  } = props;

  const style = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    };
  }, [size]);

  return (
    <img
      className={classNames(styles.avatar, {}, [className])}
      src={src}
      style={style}
      alt={alt}
    />
  );
};
