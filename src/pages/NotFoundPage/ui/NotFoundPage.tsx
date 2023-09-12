import type { FC } from 'react';
import styles from './notFoundPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '@widgets/PageWrapper/ui/PageWrapper';

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const {
    className
  } = props;

  const { t } = useTranslation();

  return (
    <PageWrapper
      className={classNames(styles.notFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </PageWrapper>
  );
};
