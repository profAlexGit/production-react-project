import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesListViewSelector } from './ArticlesListViewSelector';
import { ArticleListView } from '@entities/Article';

const meta: Meta<typeof ArticlesListViewSelector> = {
  title: 'features/ArticlesListViewSelector',
  component: ArticlesListViewSelector,
  args: {
    view: ArticleListView.PLATE
  }
};

export default meta;

type Story = StoryObj<typeof ArticlesListViewSelector>;

export const Default: Story = {};
