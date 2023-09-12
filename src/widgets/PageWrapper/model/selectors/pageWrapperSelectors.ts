import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { createSelector } from 'reselect';
import { type ScrollSchema } from '../types/pageWrapperSchema';

export const getPageWrapperScroll = (state: StateSchema): ScrollSchema => state.pageWrapper.scroll;

export const getPageWrapperScrollByPath = createSelector(
  getPageWrapperScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
