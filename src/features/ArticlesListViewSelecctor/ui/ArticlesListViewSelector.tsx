import styles from './articlesListViewSelector.module.scss';
import { classNames } from '@shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListView } from '@entities/Article';
import ListIcon from '@shared/assets/icons/list-24-24.svg';
import PlateIcon from '@shared/assets/icons/tiled-24-24.svg';
import { Icon } from '@shared/ui/Icon/Icon';
import { Button, ThemeButton } from '@shared/ui/Button/Button';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@shared/const/localstorage';

interface ArticlesListViewSelectorProps {
  className?: string;
  view: ArticleListView;
  onViewCLick: (view: ArticleListView) => void;
}

const viewTypes = [
  {
    view: ArticleListView.PLATE,
    icon: PlateIcon
  },
  {
    view: ArticleListView.LIST,
    icon: ListIcon
  }
];

export const ArticlesListViewSelector = memo((props: ArticlesListViewSelectorProps) => {
  const {
    className,
    onViewCLick,
    view
  } = props;

  const onCLick = (newView: ArticleListView) => {
    return () => {
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, newView);
      onViewCLick(newView);
    };
  };

  return (
    <div
      className={classNames(styles.articlesListViewSelector, {}, [className])}
    >
      {viewTypes.map((type) => (
        <Button
          key={type.view}
          theme={ThemeButton.CLEAR}
          onClick={onCLick(type.view)}
        >
          <Icon
            Svg={type.icon}
            className={classNames('', { [styles.notSelected]: view !== type.view })}
          />
        </Button>
      ))}
    </div>
  );
});
