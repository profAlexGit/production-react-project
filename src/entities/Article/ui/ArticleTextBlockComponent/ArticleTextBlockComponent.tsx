import styles from './articleTextBlockComponent.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import { type ArticleTextBlock } from '@entities/Article/model/types/article';
import { Text } from '@shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  data: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const {
    className,
    data
  } = props;

  return (
    <div
      className={classNames(styles.articleTextBlockComponent, {}, [className])}
    >
      {data.title && (
        <Text
          title={data.title}
        />
      )}

      {data.paragraphs.map((p, index) => <Text key={index} text={p}/>)}
    </div>
  );
});
