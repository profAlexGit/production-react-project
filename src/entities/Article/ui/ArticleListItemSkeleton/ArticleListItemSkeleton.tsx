import styles from './articleListItemSkeleton.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListView } from '../../model/types/article';
import { Card } from '@shared/ui/Card/Card';
import { Skeleton } from '@shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleListView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view
  } = props;

  if (view === ArticleListView.LIST) {
    return (
      <div
        className={classNames('', {}, [className, styles[view]])}
      >
        <Card>
          <div className={styles.header}>
            <Skeleton
              borderRadius='50%'
              width={30}
              height={30}
            />
            <Skeleton
              width={50}
              height={16}
            />
            <Skeleton
              className={styles.date}
              width={150}
              height={16}
            />
          </div>
          <Skeleton
            className={styles.title}
            width={250}
            height={24}
          />
          <Skeleton
            className={styles.img}
            width='100%'
            height={200}
          />
          <div
            className={styles.footer}
          >
            <Skeleton
              width={200}
              height={36}
            />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.articleListItem, {}, [className, styles[view]])}
    >
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton
            width={200}
            height={200}
          />
        </div>

        <div className={styles.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
          />
        </div>
        <Skeleton
          className={styles.title}
          width={150}
          height={16}
        />
      </Card>
    </div>
  );
});
