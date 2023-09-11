import styles from './articleDetailPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, memo, useEffect, useCallback } from 'react';
import {
  ArticleDetails,
  ArticleSkeleton,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '@entities/Article';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@entities/Article/model/slice/articleDetailsSlice';
import { Text, TextTheme } from '@shared/ui/Text/Text';
import { ArticleComments } from '@features/ArticleComments';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { RoutePath } from '@shared/config/routeConfig';
import { PageWrapper } from '@shared/ui/PageWrapper/PageWrapper';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const data = useSelector(getArticleDetailsData);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id ?? ''));
    }
  }, [dispatch, id]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <PageWrapper
        className={classNames(styles.articleDetailPage, {}, [className])}
      >
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onBackToList}
        >
          {t('Назад к списку')}
        </Button>
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

        { data && (
          <>
            <ArticleDetails article={data}/>
            <Text
              className={styles.commentsTitle}
              title={t('Комментарии')}
            />
            <ArticleComments id={data.id} />
          </>
        )}

      </PageWrapper>
    </DynamicModuleLoader>
  );
});
