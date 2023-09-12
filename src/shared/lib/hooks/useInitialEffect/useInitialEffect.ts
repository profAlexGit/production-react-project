import { useEffect } from 'react';

export function useInitialEffect (cb: () => void): void {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }
  }, []);
}
