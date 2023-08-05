import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileData } from '@entities/Profile';
import { mockedProfileState } from '@entities/Profile/model/types/mockedProfileState';

describe('getProfileData.test', () => {
  test('return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: mockedProfileState
    };

    expect(getProfileData(state as StateSchema)).toEqual(mockedProfileState.data);
  });

  test('should return null when no data', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toBeNull();
  });
});
