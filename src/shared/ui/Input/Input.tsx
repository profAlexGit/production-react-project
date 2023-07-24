import {
  type ChangeEvent,
  type InputHTMLAttributes,
  memo,
  type MutableRefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import styles from './input.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      (ref.current as HTMLInputElement).focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onSelect = (e: any): void => {
    setCaretPosition(e.target.selectionEnd || 0);
  };

  return (
    <div
      className={classNames(styles.inputWrapper, {}, [className])}
    >
      {placeholder && (
        <div>
          {`${placeholder}>`}
        </div>
      )}

      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...rest}
        />

        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 8.8}px` }}
          />
        )}

      </div>

    </div>
  );
});
