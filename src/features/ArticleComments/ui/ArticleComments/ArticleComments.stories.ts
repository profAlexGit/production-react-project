import type { Meta, StoryObj } from '@storybook/react';
import { ArticleComments } from './ArticleComments';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';

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
  title: 'change/ArticleComments',
  component: ArticleComments
};

export default meta;

type Story = StoryObj<typeof ArticleComments>;

export const Default: Story = {
  name: 'Список комментариев',
  decorators: [StoreDecorator(initialState)]
};
