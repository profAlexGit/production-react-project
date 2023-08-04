import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';
import { mockedProfileState } from '../../types/mockedProfileState';

describe('getProfileIsLoading.test', () => {
  test('return loading profile status', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...mockedProfileState,
        isLoading: true
      }
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(state.profile!.isLoading);
  });

  test('should return false when no loading data', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileIsLoading(state as StateSchema)).toBe(false);
  });
});
