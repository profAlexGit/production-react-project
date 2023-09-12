import { type StateSchema } from '@app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema): string => state.addCommentFormSchema?.text ?? '';

export const getAddCommentFormError = (state: StateSchema): string | null => state.addCommentFormSchema?.error || null;
