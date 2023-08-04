import { type Profile, ValidationProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
  test('success validate data', () => {
    const profileData: Partial<Profile> = {
      firstName: 'Dan',
      lastName: 'Brown',
      age: 23,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([]);
  });

  test('error with empty firstname', () => {
    const profileData: Partial<Profile> = {
      firstName: '',
      lastName: 'Brown',
      age: 23,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  test('error with empty lastname', () => {
    const profileData: Partial<Profile> = {
      firstName: 'Dan',
      lastName: '',
      age: 23,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  test('error with empty username', () => {
    const profileData: Partial<Profile> = {
      firstName: 'Dan',
      lastName: 'Brown',
      age: 23,
      username: ''
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  test('error with decimal age', () => {
    const profileData: Partial<Profile> = {
      firstName: 'Dan',
      lastName: 'Brown',
      age: 23.12,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test('error with zero age', () => {
    const profileData: Partial<Profile> = {
      firstName: 'Dan',
      lastName: 'Brown',
      age: 0,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test('multiple error with incorrect user data and incorrect age', () => {
    const profileData: Partial<Profile> = {
      firstName: '',
      lastName: 'Brown',
      age: 23.52,
      username: 'frontAlex'
    };

    const validationErrors = validateProfileData(profileData as Profile);

    expect(validationErrors).toContain(ValidationProfileError.INCORRECT_USER_DATA);
    expect(validationErrors).toContain(ValidationProfileError.INCORRECT_AGE);
  });
});
