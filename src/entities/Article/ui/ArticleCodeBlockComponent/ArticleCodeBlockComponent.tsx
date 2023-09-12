import { memo } from 'react';
import { type ArticleCodeBlock } from '@entities/Article/model/types/article';
import { Code } from '@shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  data: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const {
    className,
    data
  } = props;

  return (
    <Code
      className={className}
      text={data.code}
    />
  );
});
