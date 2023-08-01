import { type FC, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError, getProfileForm,
  getProfileIsLoading, getProfileReadonly, profileActions,
  ProfileCard,
  profileReducer
} from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from '@pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { type Currency } from '@entities/Currency';
import { type Country } from '@entities/Country';

const initialReducers: ReducersList = {
  profile: profileReducer
};

export const ProfilePage: FC = (props) => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

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
