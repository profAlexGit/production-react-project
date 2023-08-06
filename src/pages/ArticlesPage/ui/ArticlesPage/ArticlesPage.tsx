import styles from './articlesPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC = memo((props: ArticlesPageProps) => {
  const {
    className
  } = props;

  return (
    <div
      className={classNames(styles.articlesPage, {}, [className])}
    >
      ARTICLES
    </div>
  );
});
