import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

const ERROR_MESSAGE = 'some error message';
describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: ERROR_MESSAGE,
        username: '',
        password: '',
        isLoading: false
      }
    };

    expect(getLoginError(state as StateSchema)).toEqual(ERROR_MESSAGE);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
