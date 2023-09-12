import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AddCommentFormSchema } from '../types/addCommentFormSchema';

const initialState: AddCommentFormSchema = {
  text: '',
  error: null
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const {
  reducer: addCommentFormReducer,
  actions: addCommentFormActions
} = addCommentFormSlice;
