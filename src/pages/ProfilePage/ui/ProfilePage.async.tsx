import { lazy } from 'react';

export const AsyncProfilePage = lazy(async () => await import('./ProfilePage')
  .then(module => ({ default: module.ProfilePage })));
