import React, { memo } from 'react';
import { Select, type SelectOption } from '@shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';

interface CountrySelectProps {
  className?: string;
  onChange?: (value: Country) => void;
  value: Country;
  readonly?: boolean;
}

interface CountryOption extends SelectOption {
  value: Country;
  content: Country;
}

const CountryOptions: CountryOption[] = [
  {
    value: Country.Armenia,
    content: Country.Armenia
  },
  {
    value: Country.Belarus,
    content: Country.Belarus
  },
  {
    value: Country.China,
    content: Country.China
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan
  },
  {
    value: Country.Russia,
    content: Country.Russia
  }
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly = false
  } = props;
  const { t } = useTranslation();

  const onCountryChangeHandler = (value: string): void => {
    if (onChange) {
      onChange(value as Country);
    }
  };

  return (
    <Select
      className={className}
      label={t('Страна')}
      value={value}
      options={CountryOptions}
      onChange={onCountryChangeHandler}
      readonly={readonly}
    />
  );
});
