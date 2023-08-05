import { useMemo, memo, type ChangeEvent } from 'react';
import styles from './select.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
  value: string;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly
  } = props;

  const mods = {
    [styles.readonly]: !!readonly
  };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const optionsList = useMemo(() => {
    return options.map((o) => (
      <option
        key={o.value}
        value={o.value}
        className={styles.option}
      >
        {o.content}
      </option>
    ));
  }, [options]);

  return (
    <div
      className={classNames(styles.selectWrapper, mods, [className])}
    >
      {label && (
        <span className={styles.label}>
          {`${label}> `}
        </span>
      )}
      <select
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
