import { type FC } from 'react';
import styles from './pageError.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div
      className={classNames(styles.pageError, {}, [className])}
    >
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
