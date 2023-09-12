import styles from './commentCard.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { Text } from '@shared/ui/Text/Text';
import { type Comment } from '../../model/types/comment';
import { memo } from 'react';
import { AppLink } from '@shared/ui/AppLink/AppLink';
import { RoutePath } from '@shared/config/routeConfig';

interface CommentCardProps {
  className?: string;
  comment: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment
  } = props;

  return (
    <div
      className={classNames(styles.commentCard, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={styles.header}
      >
        {comment.user.avatar && (
          <Avatar
            size={30}
            src={comment.user.avatar}
          />
        )}
        <Text title={comment.user.username}/>
      </AppLink>
      <Text
        className={styles.text}
        text={comment.text}
      />
    </div>
  );
});
