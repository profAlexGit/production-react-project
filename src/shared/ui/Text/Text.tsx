import { type FC } from 'react';
import styles from './text.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY
  } = props;

  return (
    <div
      className={classNames('', {}, [className, styles[theme]])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
