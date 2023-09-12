import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type PageWrapperSchema } from '@widgets/PageWrapper';

const initialState: PageWrapperSchema = {
  scroll: {}
};

export const pageWrapperSlice = createSlice({
  name: 'pageWrapper',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    }
  }
});

export const { reducer: pageWrapperReducer } = pageWrapperSlice;
export const { actions: pageWrapperActions } = pageWrapperSlice;
