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

    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      if (observer) {
        console.log('unobserve');
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
