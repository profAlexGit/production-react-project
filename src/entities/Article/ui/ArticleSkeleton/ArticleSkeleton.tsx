import styles from './articleSkeleton.module.scss';
import { memo } from 'react';
import { Skeleton } from '@shared/ui/Skeleton/Skeleton';
export const ArticleSkeleton = memo(() => {
  return (
    <div>
      <Skeleton className={styles.avatar} width={200} height={200} borderRadius='50%' />
      <Skeleton className={styles.title} width={300} height={32} />
      <Skeleton className={styles.skeleton} width={600} height={24} />
      <Skeleton className={styles.skeleton} width='100%' height={200} />
      <Skeleton className={styles.skeleton} width='100%' height={200} />
    </div>
  );
});
