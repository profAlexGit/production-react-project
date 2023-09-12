import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleListView, mockArticle } from '@entities/Article';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof ArticleListItem> = {
  title: 'entities/Article/ArticleListItem/dark',
  component: ArticleListItem,
  args: {
    article: mockArticle
  },
  decorators: [RouteDecorator, ThemeDecorator(Theme.DARK)]
};

export default meta;

type Story = StoryObj<typeof ArticleListItem>;

export const Plate: Story = {
  name: 'plate item view',
  args: {
    view: ArticleListView.PLATE
  }
};

export const List: Story = {
  name: 'list item view',
  args: {
    view: ArticleListView.LIST
  }
};
