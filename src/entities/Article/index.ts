import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { type Article, ArticleListView } from './model/types/article';
import { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice';
import { fetchArticleById } from './model/service/fetchArticleById/fetchArticleById';
import { getArticleDetailsData } from './model/selectors/getArticleDetailsData/getArticleDetailsData';
import { getArticleDetailsError } from './model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsIsLoading } from './model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { ArticleSkeleton } from './ui/ArticleSkeleton/ArticleSkeleton';
import { ArticleList } from './ui/ArticleList/ArticleList';
import { mockArticle } from './model/types/mockArticle';

export {
  ArticleDetails,
  articleDetailsReducer,
  articleDetailsActions,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
  ArticleSkeleton,
  ArticleList,
  ArticleListView,
  mockArticle,
  type Article
};
