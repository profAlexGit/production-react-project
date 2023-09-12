import { Country } from '@entities/Country';
import { Currency } from '@entities/Currency';
import { type ProfileSchema } from '@entities/Profile';

const profileData = {
  firstName: 'Dan',
  lastName: 'Brown',
  age: 21,
  username: 'frontAlex',
  city: 'Moscow',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNCMT54L-V2GEqBbWoQRBvtqlDRxRGD5H0g&usqp=CAU',
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
