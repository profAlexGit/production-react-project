import { counterActions, counterReducer } from './counterSlice';
import { type CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  let state: CounterSchema = { value: 10 };

  beforeEach(() => {
    state = {
      value: 10
    };
  });
  test('increment action', () => {
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11
    });
  });

  test('decrement action', () => {
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9
    });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({
      value: 1
    });
  });
});
