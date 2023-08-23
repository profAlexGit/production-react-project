import { type DeepPartial } from 'redux';
import { type AddCommentFormSchema } from '../types/addCommentFormSchema';
import { addCommentFormActions, addCommentFormReducer } from '@features/AddCommentForm/model/slice/addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
  it('setText', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: ''
    };

    const result = addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setText('comment')
    );

    expect(result.text).toBe('comment');
  });
});
