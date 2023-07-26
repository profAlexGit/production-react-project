import { type DeepPartial } from 'redux';
import { type LoginSchema } from '@features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  let initialState: LoginSchema;

  beforeEach(() => {
    initialState = {
      username: 'user',
      password: 'password',
      isLoading: false,
      error: ''
    };
  });

  it('test setUsername', () => {
    const state: DeepPartial<LoginSchema> = initialState;

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('username')
    )).toEqual({
      ...initialState,
      username: 'username'
    });
  });

  it('test setPassword', () => {
    const state: DeepPartial<LoginSchema> = initialState;

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('pass')
    )).toEqual({
      ...initialState,
      password: 'pass'
    });
  });
});
