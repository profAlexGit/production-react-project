import type { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const {
    className,
    short
  } = props;

  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    i18n.changeLanguage(
      i18n.language === 'ru'
        ? 'en'
        : 'ru'
    );
  };

  const lang = short ? 'Короткий язык' : 'язык';

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(lang)}
    </Button>
  );
};
