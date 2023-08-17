import styles from './skeletonCommentCard.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import { Skeleton } from '@shared/ui/Skeleton/Skeleton';

interface SkeletonCommentCardProps {
  className?: string;
}

export const SkeletonCommentCard = memo((props: SkeletonCommentCardProps) => {
  const {
    className
  } = props;

  return (
    <div
      className={classNames(styles.skeletonCommentCard, {}, [className])}
    >
      <div className={styles.skeletonHeader}>
        <Skeleton width={30} height={30} borderRadius="50%"/>
        <Skeleton width={62} height={20}/>
      </div>
      <Skeleton
        className={styles.skeletonText}
        width="100%"
        height={20}
      />
    </div>
  );
});
