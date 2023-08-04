import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import { mockedProfileState } from '../../types/mockedProfileState';

describe('getProfileForm.test', () => {
  test('return profile form data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: mockedProfileState
    };

    expect(getProfileForm(state as StateSchema)).toEqual(state.profile!.form);
  });

  test('should return null when no form data', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toBeNull();
  });
});
