import styles from './addCommentForm.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from '@shared/ui/Input/Input';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '@features/AddCommentForm/model/slice/addCommentFormSlice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '@features/AddCommentForm/model/selectors/addCommentFormSelectors';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
  addCommentFormSchema: addCommentFormReducer
};

export const AddCommentForm = memo((props: AddCommentFormProps) => {
  const {
    className,
    onSendComment
  } = props;
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const ref = useRef(() => {
    onSendComment(text);
    onCommentTextChange('');
  });

  useEffect(() => {
    ref.current = () => {
      onSendComment(text);
      onCommentTextChange('');
    };
  }, [onSendComment, text]);

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const sendCommentHandler = useCallback(() => {
    ref.current();
  }, []);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div
        className={classNames(styles.addCommentForm, {}, [className])}
      >
        <Input
          className={styles.input}
          placeholder={t('Введите текст комментария')}
          onChange={onCommentTextChange}
          value={text}
        />
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={sendCommentHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>

  );
});
