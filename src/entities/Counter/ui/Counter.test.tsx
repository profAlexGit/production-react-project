import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from '@shared/lib/tests/componentRender/componentRender';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';

describe('Counter', () => {
  const getState = (value: number = 10): DeepPartial<StateSchema> => {
    return {
      counter: {
        value
      }
    };
  };
  it('Counter render', () => {
    componentRender(<Counter />, { initialState: getState() });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('value')).toBeInTheDocument();
    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
  });

  it('Counter right render value from store', () => {
    componentRender(<Counter />, { initialState: getState(100) });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('value')).toHaveTextContent('100');
  });

  it('increment value', () => {
    const state = getState();
    componentRender(<Counter />, { initialState: state });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    const valueText = screen.getByTestId('value');
    expect(valueText).toHaveTextContent(`${state.counter?.value}`);
    const incrementBtn = screen.getByTestId('increment-button');
    fireEvent.click(incrementBtn);
    const res = `${(state.counter?.value || 0) + 1}`;
    expect(valueText).toHaveTextContent(res);
  });

  it('decrement value', () => {
    const state = getState();
    componentRender(<Counter />, { initialState: state });
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    const valueText = screen.getByTestId('value');
    expect(valueText).toHaveTextContent(`${state.counter?.value}`);
    const decrementBtn = screen.getByTestId('decrement-button');
    fireEvent.click(decrementBtn);
    const res = `${(state.counter?.value || 0) - 1}`;
    expect(valueText).toHaveTextContent(res);
  });
});
