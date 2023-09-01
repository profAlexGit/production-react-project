import styles from './card.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;
  return (
    <div
      className={classNames(styles.card, {}, [className])}
      {...rest}
    >
      {children}
    </div>
  );
};
