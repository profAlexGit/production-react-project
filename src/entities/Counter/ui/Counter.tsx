import { type FC } from 'react';
import styles from './counter.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { Button } from '@shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
  const {
    className
  } = props;

  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  return (
    <div
      data-testid='counter'
      className={classNames(styles.counter, {}, [className])}
    >
      <h1 data-testid='value'>{counterValue}</h1>
      <Button
        data-testid='increment-button'
        onClick={increment}
      >
				increment
      </Button>
      <Button
        data-testid='decrement-button'
        onClick={decrement}
      >
				decrement
      </Button>
    </div>
  );
};
