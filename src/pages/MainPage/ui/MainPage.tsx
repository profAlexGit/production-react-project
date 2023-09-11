import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import { BugButton } from '@app/providers/ErrorBoundary';
import { PageWrapper } from '@shared/ui/PageWrapper/PageWrapper';

export const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <PageWrapper>
      {t('Главная страница')}
      <BugButton />
    </PageWrapper>
  );
};
