import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = SizeButton.M,
    disabled = false,
    ...rest
  } = props;

  const classes = (): string => {
    const mainClass = styles.button;
    const mods = {
      [styles.square]: !!square,
      [styles.disabled]: disabled
    };

    const additional = [className, styles[size]];

    if (theme) {
      additional.push(styles[theme]);
    }

    return classNames(mainClass, mods, additional);
  };

  return (
    <button
      className={classes()}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
