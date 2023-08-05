import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileError } from './getProfileError';
import { mockedProfileState } from '../../types/mockedProfileState';

describe('getProfileError.test', () => {
  test('return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...mockedProfileState,
        error: 'some error'
      }
    };

    expect(getProfileError(state as StateSchema)).toBe('some error');
  });

  test('should return empty string when no error', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toBe('');
  });
});
