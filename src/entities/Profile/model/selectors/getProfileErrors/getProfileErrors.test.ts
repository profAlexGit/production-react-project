import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileErrors } from './getProfileErrors';
import { mockedProfileState } from '../../types/mockedProfileState';
import { ValidationProfileError } from '../../types/profile';

describe('getProfileErrors.test', () => {
  test('return profile validation errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        ...mockedProfileState,
        validateError: [ValidationProfileError.INCORRECT_USER_DATA]
      }
    };

    expect(getProfileErrors(state as StateSchema)).toEqual(state.profile!.validateError);
  });

  test('should return empty array when no validation errors', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileErrors(state as StateSchema)).toEqual([]);
  });
});
