import styles from './articleList.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type Article, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { memo, type ReactNode } from 'react';
import { ArticleListItemSkeleton } from '@entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleListView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleListView.PLATE
  } = props;

  const getSkeletons = (): ReactNode[] => {
    return new Array(view === ArticleListView.PLATE ? 9 : 3)
      .fill(0)
      .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index} />
      ));
  };

  if (isLoading) {
    return (
      <div
        className={classNames(styles.articleList, {}, [className, styles[view]])}
      >
        {getSkeletons()}
      </div>
    );
  }

  const renderArticle = (article: Article): JSX.Element => {
    return <ArticleListItem
      key={article.id}
      article={article}
      view={view}
    />;
  };

  return (
    <div
      className={classNames(styles.articleList, {}, [className, styles[view]])}
    >
      {
        articles.length > 0
          ? articles.map((article) => renderArticle(article))
          : false
      }
    </div>
  );
});
