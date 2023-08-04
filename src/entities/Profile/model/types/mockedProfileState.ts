import { Country } from '@entities/Country';
import { Currency } from '@entities/Currency';
import { type ProfileSchema } from '@entities/Profile';

const profileData = {
  firstName: 'Dan',
  lastName: 'Brown',
  age: 21,
  username: 'frontAlex',
  city: 'Moscow',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  country: Country.China,
  currency: Currency.RUB
};

export const mockedProfileState: ProfileSchema = {
  data: profileData,
  form: profileData,
  validateError: [],
  readonly: true,
  isLoading: false
};
