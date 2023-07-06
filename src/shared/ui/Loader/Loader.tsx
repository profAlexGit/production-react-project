import type { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import './loader.scss';

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
  const {
    className
  } = props;

  return (
    <div
      className={classNames('ldsEllipsis', {}, [className])}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
