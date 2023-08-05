import { type Currency } from '@entities/Currency';
import { type Country } from '@entities/Country/model/types/country';

export enum ValidationProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}
export interface Profile {
  firstName: string;
  lastName: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile,
  form?: Profile,
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError?: ValidationProfileError[];
}
