import { type FC, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileErrors,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer
} from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from '@pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { type Currency } from '@entities/Currency';
import { type Country } from '@entities/Country';
import { Text, TextTheme } from '@shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ValidationProfileError } from '@entities/Profile/model/types/profile';

const initialReducers: ReducersList = {
  profile: profileReducer
};

export const ProfilePage: FC = (props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileErrors);

  const validateErrorTranslates: Record<ValidationProfileError, string> = {
    [ValidationProfileError.SERVER_ERROR]: t('Не удалось обновить профиль'),
    [ValidationProfileError.NO_DATA]: t('Отсутствуют данные пользователя'),
    [ValidationProfileError.INCORRECT_USER_DATA]: t('Некорректные данные пользователя'),
    [ValidationProfileError.INCORRECT_AGE]: t('Некорректный возраст')
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = (value: string): void => {
    dispatch(profileActions.updateProfile({
      firstName: value
    }));
  };

  const onChangeLastname = (value: string): void => {
    dispatch(profileActions.updateProfile({
      lastName: value
    }));
  };

  const onChangeAge = (value: string): void => {
    if (value.match(/\D/ig)) {
      return;
    }

    dispatch(profileActions.updateProfile({
      age: Number(value) || 0
    }));
  };

  const onChangeCity = (value: string): void => {
    dispatch(profileActions.updateProfile({
      city: value
    }));
  };

  const onChangeUsername = (value: string): void => {
    dispatch(profileActions.updateProfile({
      username: value
    }));
  };

  const onChangeAvatar = (value: string): void => {
    dispatch(profileActions.updateProfile({
      avatar: value
    }));
  };

  const onChangeCurrency = (value: Currency): void => {
    dispatch(profileActions.updateProfile({
      currency: value
    }));
  };

  const onChangeCountry = (value: Country): void => {
    dispatch(profileActions.updateProfile({
      country: value
    }));
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <ProfilePageHeader />
        {validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>

  );
};
