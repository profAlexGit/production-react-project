import { memo } from 'react';
import styles from './text.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum TextALign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextALign;
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextALign.LEFT,
    size = TextSize.M
  } = props;

  return (
    <div
      className={classNames('', {}, [className, styles[theme], styles[align], styles[size]])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
