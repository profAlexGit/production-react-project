import styles from './commentList.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type Comment } from '../../model/types/comment';
import { Text } from '@shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '@entities/Comment/ui/CommentCard/CommentCard';
import { SkeletonCommentCard } from '@entities/Comment/ui/SkeletonCommentCard/SkeletonCommentCard';
import { memo } from 'react';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
  error?: string | null;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading = false,
    error
  } = props;
  const { t } = useTranslation('comments');

  return (
    <div
      className={classNames(styles.commentList, {}, [className])}
    >
      {isLoading && (
        <SkeletonCommentCard />
      )}
      {error && (
        <Text text={t(error)}/>
      )}
      {
        comments?.length
          ? comments.map((c) => (
            <CommentCard
              key={c.id}
              comment={c}
            />
          ))
          : <Text text={t('Комментарии отсутствуют')}/>
      }
    </div>
  );
});
