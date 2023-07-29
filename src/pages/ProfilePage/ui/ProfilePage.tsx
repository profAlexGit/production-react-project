import { type FC, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getProfileIsLoading, ProfileCard, profileReducer } from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Loader } from '@shared/ui/Loader/Loader';

const initialReducers: ReducersList = {
  profile: profileReducer
};

export const ProfilePage: FC = (props) => {
  const dispatch = useAppDispatch();
  const profileIsLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    // dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      {profileIsLoading && <Loader />}

      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>

  );
};
