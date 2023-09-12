import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from '../ArticleList';
import { ArticleListView, mockArticle } from '@entities/Article';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/Article/ArticleList/orange',
  component: ArticleList,
  args: {
    isLoading: false,
    articles: [mockArticle, mockArticle, mockArticle, mockArticle]
  },
  decorators: [RouteDecorator, ThemeDecorator(Theme.ORANGE)]
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
  name: 'плитка (по умолчанию)'
};

export const DefaultLoading: Story = {
  name: 'во время загрузки плитка (по умолчанию)',
  args: {
    isLoading: true
  }
};

export const ListView: Story = {
  name: 'список',
  args: {
    view: ArticleListView.LIST
  }
};

export const ListViewLoading: Story = {
  name: 'во время загрузки список (по умолчанию)',
  args: {
    view: ArticleListView.LIST,
    isLoading: true
  }
};
