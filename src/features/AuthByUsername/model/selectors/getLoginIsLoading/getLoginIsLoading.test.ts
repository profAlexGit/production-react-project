import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: true
      }
    };

    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: false
      }
    };

    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
