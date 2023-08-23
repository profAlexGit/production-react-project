import { memo, useCallback } from 'react';
import styles from './articleComments.module.scss';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/service/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useSelector } from 'react-redux';
import {
  getArticleCommentIsLoading,
  getArticleCommentsError
} from '@features/ArticleComments/model/selectors/articleCommentsSelectors/articleCommentsSelectors';
import { CommentList } from '@entities/Comment';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/articleCommentsSlice';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from '@features/AddCommentForm';
import { addCommentForArticle } from '@features/ArticleComments/model/service/addCommentForArticle/addCommentForArticle';

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer
};

interface ArticleCommentsProps {
  className?: string;
  id: string;
}

export const ArticleComments = memo((props: ArticleCommentsProps) => {
  const {
    className,
    id
  } = props;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleCommentIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const error = useSelector(getArticleCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} >
      <AddCommentForm
        className={styles.addCommentForm}
        onSendComment={onSendComment}
      />
      <CommentList
        className={className}
        comments={comments}
        isLoading={isLoading}
        error={error}
      />
    </DynamicModuleLoader>
  );
});
