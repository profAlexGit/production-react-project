import styles from './articlesPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, memo, useState, useCallback } from 'react';
import { ArticleList, ArticleListView } from '@entities/Article';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '@pages/ArticlesPage/model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading } from '@pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '@pages/ArticlesPage/model/service/fetchArticlesList';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { ArticlesListViewSelector } from '@features/ArticlesListViewSelecctor';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@shared/const/localstorage';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

interface ArticlesPageProps {
  className?: string;
}

export const ArticlesPage: FC = memo((props: ArticlesPageProps) => {
  const {
    className
  } = props;
  const dispatch = useAppDispatch();
  const [view, setView] = useState<ArticleListView>(
    localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleListView || ArticleListView.PLATE
  );

  useInitialEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticlesList());
    }
  });

  const isLoading = useSelector(getArticlesPageIsLoading);
  const articles = useSelector(getArticles.selectAll);

  const onChangeView = useCallback((newView: ArticleListView) => {
    setView(newView);
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        className={classNames(styles.articlesPage, {}, [className])}
      >
        <ArticlesListViewSelector
          view={view}
          onViewCLick={onChangeView}
        />
        <ArticleList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </div>
    </DynamicModuleLoader>
  );
});
