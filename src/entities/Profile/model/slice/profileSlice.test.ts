import { type DeepPartial } from 'redux';
import { profileActions, profileReducer } from './profileSlice';
import { type Profile, type ProfileSchema, ValidationProfileError } from '../types/profile';
import { mockedProfileState } from '../types/mockedProfileState';
import { updateProfileData } from '@entities/Profile';

describe('loginSlice.test', () => {
  let initialState: ProfileSchema;

  beforeEach(() => {
    initialState = mockedProfileState;
  });

  it('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      ...initialState,
      readonly: true
    };

    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false)
    )).toEqual({
      ...initialState,
      readonly: false
    });
  });

  it('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      ...initialState,
      readonly: false,
      error: 'some error',
      validateError: [ValidationProfileError.INCORRECT_USER_DATA],
      form: {
        ...initialState.form as Profile,
        firstName: 'edited field',
        lastName: 'edited field',
        age: 0
      }
    };

    const result = profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    );

    expect(result.form).toEqual(state.data);
    expect(result.readonly).toBe(true);
    expect(result.error).toBeUndefined();
    expect(result.validateError).toEqual([]);
  });

  it('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      ...initialState,
      form: {
        ...initialState.form as Profile,
        firstName: 'edited field',
        lastName: 'edited field',
        age: 0
      }
    };

    const result = profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile(state.form as DeepPartial<Profile>)
    );

    expect(result.form).toEqual(state.form);
  });

  it('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      ...initialState,
      isLoading: false,
      validateError: [ValidationProfileError.SERVER_ERROR],
      form: {
        ...initialState.form as Profile,
        firstName: 'edited field',
        lastName: 'edited field',
        age: 0
      }
    };

    const result = profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    );

    expect(result.isLoading).toEqual(true);
    expect(result.validateError).toEqual([]);
  });

  it('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      ...initialState,
      isLoading: true,
      form: {
        ...initialState.form as Profile,
        firstName: 'edited field',
        lastName: 'edited field',
        age: 0
      }
    };

    const result = profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(mockedProfileState.data as Profile, '', undefined)
    );

    expect(result.isLoading).toEqual(false);
    expect(result.data).toEqual(result.form);
    expect(result.data).toEqual(mockedProfileState.data);
    expect(result.validateError).toEqual([]);
  });
});
