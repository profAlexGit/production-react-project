import type { Meta, StoryObj } from '@storybook/react';
import { ArticleComments } from './ArticleComments';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const initialState: DeepPartial<StateSchema> = {
  articleComments: {
    ids: ['1'],
    entities: {
      1: {
        text: 'comment',
        id: '1',
        user: {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNCMT54L-V2GEqBbWoQRBvtqlDRxRGD5H0g&usqp=CAU',
          username: 'username',
          id: '1'
        }
      }
    },
    isLoading: false,
    error: null
  }
};

const meta: Meta<typeof ArticleComments> = {
  title: 'features/ArticleComments',
  component: ArticleComments,
  decorators: [RouteDecorator]
};

export default meta;

type Story = StoryObj<typeof ArticleComments>;

export const DefaultLight: Story = {
  name: 'Список комментариев (light)',
  decorators: [StoreDecorator(initialState)]
};

export const DefaultDark: Story = {
  name: 'Список комментариев (dark)',
  decorators: [StoreDecorator(initialState), ThemeDecorator(Theme.DARK)]
};

export const DefaultOrange: Story = {
  name: 'Список комментариев (orange)',
  decorators: [StoreDecorator(initialState), ThemeDecorator(Theme.ORANGE)]
};

export const NoCommentsLight: Story = {
  name: 'Комментарии отсутствуют (light)',
  decorators: [StoreDecorator({
    ...initialState,
    articleComments: {
      ...initialState.articleComments,
      isLoading: false,
      error: null,
      ids: [],
      entities: {}
    }
  })]
};

export const NoCommentsDark: Story = {
  name: 'Комментарии отсутствуют (dark)',
  decorators: [StoreDecorator({
    ...initialState,
    articleComments: {
      ...initialState.articleComments,
      isLoading: false,
      error: null,
      ids: [],
      entities: {}
    }
  }), ThemeDecorator(Theme.DARK)]
};

export const NoCommentsOrange: Story = {
  name: 'Комментарии отсутствуют (orange)',
  decorators: [StoreDecorator({
    ...initialState,
    articleComments: {
      ...initialState.articleComments,
      isLoading: false,
      error: null,
      ids: [],
      entities: {}
    }
  }), ThemeDecorator(Theme.ORANGE)]
};
