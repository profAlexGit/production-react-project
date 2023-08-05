import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData, type Profile } from '@entities/Profile';
import { Currency } from '@entities/Currency';
import { Country } from '@entities/Country/model/types/country';

describe('fetchProfileData.test', () => {
  it('success fetch profile data', async () => {
    const profileData: Profile = {
      firstName: 'Dan',
      lastName: 'Brown',
      age: 52,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'frontalex',
      avatar: ''
    };

    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      data: profileData
    }));

    const result = await thunk.callThunk(undefined);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  it('fail fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({
      status: 403
    }));

    const result = await thunk.callThunk(undefined);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Ошибка запроса профиля');
  });
});
