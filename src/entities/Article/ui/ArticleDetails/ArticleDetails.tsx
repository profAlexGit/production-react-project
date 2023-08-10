import styles from './articleDetails.module.scss';
import { memo, useCallback } from 'react';
import { type Article, type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { Avatar } from '@shared/ui/Avatar/Avatar';
import { Text, TextSize } from '@shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@shared/ui/Icon/Icon';
import { ArticleTextBlockComponent } from '@entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '@entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '@entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  article: Article;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    article
  } = props;

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent
          className={styles.textBlock}
          data={block}
        />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent
          className={styles.imageBlock}
          data={block}
        />;
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent
          className={styles.codeBlock}
          data={block}
        />;
      default:
        return null;
    }
  }, []);

  return (
    <>
      <Avatar
        className={styles.avatar}
        size={200}
        src={article.img}
      />
      <Text
        title={article.title}
        text={article.subtitle}
        size={TextSize.L}
      />
      <div className={styles.articleInfoBlock}>
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon}/>
          <Text
            text={`${article.views}`}
          />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon}/>
          <Text
            text={article.createdAt}
          />
        </div>
      </div>

      {article.blocks.map(renderBlock)}
    </>
  );
});
