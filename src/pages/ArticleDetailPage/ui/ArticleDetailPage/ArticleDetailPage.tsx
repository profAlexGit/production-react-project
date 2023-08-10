import styles from './articleDetailPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, memo, useEffect } from 'react';
import {
  ArticleDetails,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
  fetchArticleById,
  getArticleDetailsData, ArticleSkeleton
} from '@entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@entities/Article/model/slice/articleDetailsSlice';
import { Text, TextTheme } from '@shared/ui/Text/Text';

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

interface ArticleDetailPageProps {
  className?: string;
}

export const ArticleDetailPage: FC = memo((props: ArticleDetailPageProps) => {
  const {
    className
  } = props;

  const { t } = useTranslation('article');
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id ?? ''));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div
        className={classNames(styles.articleDetailPage, {}, [className])}
      >
        {isLoading && (
          <ArticleSkeleton />
        )}

        {error && (
          <Text
            theme={TextTheme.ERROR}
            title={t('Ошибка')}
            text={t(error)}
          />
        )}

        {data && <ArticleDetails article={data}/>}

      </div>
    </DynamicModuleLoader>
  );
});
