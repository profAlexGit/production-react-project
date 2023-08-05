import { type Profile, ValidationProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidationProfileError[] => {
  if (!profile) {
    return [ValidationProfileError.NO_DATA];
  }

  const {
    firstName,
    lastName,
    username,
    age
  } = profile;

  const errors: ValidationProfileError[] = [];

  if (!firstName || !lastName || !username) {
    errors.push(ValidationProfileError.INCORRECT_USER_DATA);
  }

  if (!age || age <= 0 || !Number.isInteger(age)) {
    errors.push(ValidationProfileError.INCORRECT_AGE);
  }

  return errors;
};
