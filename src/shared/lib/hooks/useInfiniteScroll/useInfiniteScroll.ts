import { type MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (args: UseInfiniteScrollOptions): void => {
  const {
    callback,
    triggerRef,
    wrapperRef
  } = args;

  useEffect(() => {
    if (!callback) {
      return;
    }
    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerRef.current);

    return () => {
      if (observer) {
        console.log('unobserve');
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
