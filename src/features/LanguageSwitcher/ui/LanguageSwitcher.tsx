import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { memo } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
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
});
