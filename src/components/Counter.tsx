import { FC, useState } from "react";
import styles from './counter.module.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className={styles.counter}>
            <button onClick={decrement}>decrement</button>
            <span className={styles.counterLabel}>{count}</span>
            <button onClick={increment}>increment</button>
        </div>
    )
}