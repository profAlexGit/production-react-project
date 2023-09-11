import styles from './articlesPage.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type FC, memo, useState, useCallback, useEffect } from 'react';
import { ArticleList, ArticleListView } from '@entities/Article';
import { DynamicModuleLoader, type ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesPageIsLoading
} from '../../model/selectors/articlesPageSelectors';
import { useInitialEffect } from '@shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { ArticlesListViewSelector } from '@features/ArticlesListViewSelecctor';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@shared/const/localstorage';
import { PageWrapper } from '@shared/ui/PageWrapper/PageWrapper';
import { fetchNextArticlesPage } from '../../model/service/fetchNextArticlesPage/fetchNextArticlesPage';

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
  const isLoading = useSelector(getArticlesPageIsLoading);
  const articles = useSelector(getArticles.selectAll);

  const [view, setView] = useState<ArticleListView>(
    localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleListView || ArticleListView.PLATE
  );

  useEffect(() => {
    dispatch(articlesPageActions.setLimit(view === ArticleListView.LIST ? 4 : 10));
  }, [dispatch, view]);

  const onLoadNextPage = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList({ page: 1 }));
  });

  const onChangeView = useCallback((newView: ArticleListView) => {
    setView(newView);
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <PageWrapper
        className={classNames(styles.articlesPage, {}, [className])}
        onScrollEnd={onLoadNextPage}
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
      </PageWrapper>
    </DynamicModuleLoader>
  );
});
