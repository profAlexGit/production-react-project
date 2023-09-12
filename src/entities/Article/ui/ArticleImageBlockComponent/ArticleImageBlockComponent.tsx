import styles from './articleImageBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleImageBlock } from '@entities/Article/model/types/article';
import { Text, TextALign } from '@shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  data: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const {
    className,
    data
  } = props;

  return (
    <div
      className={className}
    >
      <img
        className={styles.img}
        src={data.src}
        alt="image"
      />
      <Text text={data.title} align={TextALign.CENTER}/>
    </div>
  );
});
