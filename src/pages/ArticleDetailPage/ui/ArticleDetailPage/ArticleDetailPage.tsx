import styles from './articleDetailPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';

interface ArticleDetailPageProps {
  className?: string;
}

export const ArticleDetailPage: FC = memo((props: ArticleDetailPageProps) => {
  const {
    className
  } = props;

  // const { t } = useTranslation('article');

  return (
    <div
      className={classNames(styles.articleDetailPage, {}, [className])}
    >
      ARTICLE DETAIL
    </div>
  );
});
