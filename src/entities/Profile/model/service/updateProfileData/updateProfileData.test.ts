import { updateProfileData } from '@entities/Profile';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { Currency } from '@entities/Currency';
import { Country } from '@entities/Country/model/types/country';

describe('updateProfileData.test', () => {
  it('success update', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: 'Dan',
          lastName: 'Brown',
          age: 52,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    const getState = jest.spyOn(thunk, 'getState');
    getState.mockReturnValue(newData as StateSchema);

    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        data: newData.profile!.form
      }
    ));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(thunk.api.patch).toHaveBeenCalledTimes(1);
    expect(thunk.api.patch).toHaveBeenCalledWith('/profile', newData.profile!.form);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(newData.profile!.form);
  });

  it('fail update', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: 'Dan',
          lastName: 'Brown',
          age: 52,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    const getState = jest.spyOn(thunk, 'getState');

    getState.mockReturnValue(newData as StateSchema);
    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        status: 500
      }
    ));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(thunk.api.patch).toHaveBeenCalledTimes(1);
    expect(thunk.api.patch).toHaveBeenCalledWith('/profile', newData.profile!.form);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось обновить профиль');
  });

  it('fail update with no data', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData);
    const getState = jest.spyOn(thunk, 'getState');

    getState.mockReturnValue(newData as StateSchema);
    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        status: 200
      }
    ));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Не удалось обновить профиль');
  });
});
