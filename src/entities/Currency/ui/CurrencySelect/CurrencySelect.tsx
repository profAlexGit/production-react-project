import { memo } from 'react';
import { Select, type SelectOption } from '@shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

interface CurrencySelectOption extends SelectOption {
  content: Currency,
  value: Currency
}

const selectCurrencyOptions: CurrencySelectOption[] = [
  {
    content: Currency.RUB,
    value: Currency.RUB
  },
  {
    content: Currency.EUR,
    value: Currency.EUR
  },
  {
    content: Currency.USD,
    value: Currency.USD
  }
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly = false
  } = props;

  const { t } = useTranslation();

  const onChangeHandler = (value: string): void => {
    if (onChange) {
      onChange(value as Currency);
    }
  };

  return (
    <Select
      className={className}
      label={t('Валюта')}
      options={selectCurrencyOptions}
      value={value || selectCurrencyOptions[0].value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
