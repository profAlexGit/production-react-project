import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '@features/AddCommentForm/model/selectors/addCommentFormSelectors';

describe('getAddCommentFormText.test', () => {
  it('return comment text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentFormSchema: {
        text: 'comment',
        error: null
      }
    };

    const result = getAddCommentFormText(state as StateSchema);

    expect(result).toBe(state.addCommentFormSchema!.text);
  });

  it('return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    const result = getAddCommentFormText(state as StateSchema);

    expect(result).toBe('');
  });
});

describe('getAddCommentFormError.test', () => {
  it('return comment text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentFormSchema: {
        text: '',
        error: 'error'
      }
    };

    const result = getAddCommentFormError(state as StateSchema);

    expect(result).toBe(state.addCommentFormSchema!.error);
  });

  it('return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    const result = getAddCommentFormError(state as StateSchema);

    expect(result).toBe(null);
  });
});
