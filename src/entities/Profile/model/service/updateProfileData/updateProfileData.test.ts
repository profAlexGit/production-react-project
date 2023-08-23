import { updateProfileData } from '@entities/Profile';
import { TestAsyncThunk } from '@shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { Currency } from '@entities/Currency';
import { Country } from '@entities/Country/model/types/country';
import { ValidationProfileError } from '@entities/Profile/model/types/profile';

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

    const thunk = new TestAsyncThunk(updateProfileData, newData);
    const getState = jest.spyOn(thunk, 'getState');
    getState.mockReturnValue(newData as StateSchema);

    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        data: newData.profile!.form
      }
    ));

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(thunk.api.patch).toHaveBeenCalledTimes(1);
    expect(thunk.api.patch).toHaveBeenCalledWith('/profile/1', newData.profile!.form);
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

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        status: 500
      }
    ));

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(thunk.api.patch).toHaveBeenCalledTimes(1);
    expect(thunk.api.patch).toHaveBeenCalledWith('/profile/1', newData.profile!.form);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.SERVER_ERROR]);
  });

  it('fail update with no data', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    thunk.api.patch.mockReturnValue(Promise.resolve(
      {
        status: 200
      }
    ));

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.NO_DATA]);
  });

  it('fail validation data with empty firstname', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: '',
          lastName: 'lastname',
          age: 52,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  it('fail validation data with empty lastname', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: 'firstname',
          lastName: '',
          age: 52,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);
    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  it('fail validation data with empty username', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: 'firstname',
          lastName: 'lastname',
          age: 52,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: '',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_USER_DATA]);
  });

  it('fail validation data with wrong age', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: 'name',
          lastName: 'lastname',
          age: 12.34,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  it('fail validation data with multiple errors', async () => {
    const newData: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
        readonly: false,
        form: {
          firstName: '',
          lastName: 'lastname',
          age: -23,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'frontalex',
          avatar: ''
        }
      }
    };

    const thunk = new TestAsyncThunk(updateProfileData, newData);

    const result = await thunk.callThunk('1');

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toContain(ValidationProfileError.INCORRECT_AGE);
    expect(result.payload).toContain(ValidationProfileError.INCORRECT_USER_DATA);
  });
});
