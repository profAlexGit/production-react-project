import { type StateSchema } from '@app/providers/StoreProvider';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { type AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue>
	= (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg);
    return await action(this.dispatch, this.getState, {
      api: this.api
    });
  }
}
