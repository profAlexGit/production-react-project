import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import { BugButton } from '@app/providers/ErrorBoundary';

export const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  );
};
