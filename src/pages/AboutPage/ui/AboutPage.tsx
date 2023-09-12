import { useTranslation } from 'react-i18next';
import type { FC } from 'react';
import { PageWrapper } from '@widgets/PageWrapper/ui/PageWrapper';

export const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <PageWrapper>
      {t('О сайте')}
    </PageWrapper>
  );
};
