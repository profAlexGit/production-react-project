import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...rest
  } = props;

  const classes = (): string => {
    const mainClass = styles.button;
    const mods = {};
    const additional = [className];

    if (theme) {
      additional.push(styles[theme]);
    }

    return classNames(mainClass, mods, additional);
  };

  return (
    <button
      className={classes()}
      {...rest}
    >
      {children}
    </button>
  );
};
