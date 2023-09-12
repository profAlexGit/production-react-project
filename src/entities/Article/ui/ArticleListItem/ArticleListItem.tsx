import styles from './articleListItem.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { type Article, ArticleBlockType, ArticleListView, type ArticleTextBlock } from '../../model/types/article';
import { Text } from '@shared/ui/Text/Text';
import { Icon } from '@shared/ui/Icon/Icon';
import EyeIcon from '@shared/assets/icons/eye-20-20.svg';
import { Card } from '@shared/ui/Card/Card';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { memo, useCallback, useMemo } from 'react';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router';
import { RoutePath } from '@shared/config/routeConfig';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleListView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view
  } = props;

  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article.id}`);
  }, [article.id, navigate]);

  const types = useMemo(() => (
    <Text
      className={styles.types}
      text={article.type.join(', ')}
    />
  ), [article]);

  const views = useMemo(() => (
    <>
      <Text
        className={styles.views}
        text={article.views + ''}
      />
      <Icon
        className={styles.icon}
        Svg={EyeIcon}
      />
    </>
  ), [article]);

  if (view === ArticleListView.LIST) {
    const textBlock = article.blocks
      .find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div
        className={classNames('', {}, [className, styles[view]])}
      >
        <Card>
          <div className={styles.header}>
            <Avatar
              size={30}
              src={article.user.avatar}
            />
            <Text
              text={article.user.username}
            />
            <Text
              className={styles.date}
              text={article.createdAt}
            />
          </div>
          <Text
            className={styles.title}
            title={article.title}
          />
          {types}
          <img
            className={styles.img}
            alt={article.title}
            src={article.img}
          />
          {
            textBlock
              ? <ArticleTextBlockComponent
                className={styles.textBlock}
                data={textBlock}
              />
              : false
          }

          <div
            className={styles.footer}
          >
            <Button
              theme={ThemeButton.OUTLINE}
              onClick={onOpenArticle}
            >
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames('', {}, [className, styles[view]])}
    >
      <Card onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.img}
            src={article.img}
            alt={article.title}
          />
          <Text
            className={styles.date}
            text={article.createdAt}
          />
        </div>

        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text
          className={styles.title}
          text={article.title}
        />
      </Card>
    </div>
  );
});
