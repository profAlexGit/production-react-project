import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  decorators: [RouteDecorator]
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  name: 'Коментарий с аватаркой профиля',
  args: {
    comment: {
      text: 'some comment text',
      id: '1',
      user: {
        id: '1',
        username: 'username',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNCMT54L-V2GEqBbWoQRBvtqlDRxRGD5H0g&usqp=CAU'
      }
    }
  }
};
