import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton';
import { ArticleListView } from '@entities/Article';

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: 'entities/Article/ArticleListItemSkeleton/light',
  component: ArticleListItemSkeleton
};

export default meta;

type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const DefaultPlate: Story = {
  name: 'скелетон для элемента списка в виде плитки',
  args: {
    view: ArticleListView.PLATE
  }
};

export const DefaultList: Story = {
  name: 'скелетон для элемента списка',
  args: {
    view: ArticleListView.LIST
  }
};
