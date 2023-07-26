import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@entities/Profile';

const initialReducers: ReducersList = {
  profile: profileReducer
};

export const ProfilePage: FC = (props) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        {t('Профиль', { ns: 'navigation' })}
      </div>
    </DynamicModuleLoader>

  );
};
