import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';
import { mockedProfileState } from '../../types/mockedProfileState';

describe('getProfileReadonly.test', () => {
  test('return readonly profile status', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...mockedProfileState,
        readonly: true
      }
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(state.profile!.readonly);
  });

  test('should return false when no readonly data', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toBe(false);
  });
});
