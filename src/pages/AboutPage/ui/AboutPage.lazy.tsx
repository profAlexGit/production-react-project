// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { lazy } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./AboutPage')
      .then(module => ({ default: module.AboutPage })));
  }, 5000);
}));
