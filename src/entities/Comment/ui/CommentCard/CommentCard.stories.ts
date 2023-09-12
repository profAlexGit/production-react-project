import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';
import avatarImg from '@shared/assets/avatar.jpg';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  decorators: [RouteDecorator]
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const DefaultLight: Story = {
  name: 'Коментарий с аватаркой профиля (light)',
  args: {
    comment: {
      text: 'some comment text',
      id: '1',
      user: {
        id: '1',
        username: 'username',
        avatar: avatarImg
      }
    }
  }
};

export const DefaultDark: Story = {
  name: 'Коментарий с аватаркой профиля (dark)',
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: {
      text: 'some comment text',
      id: '1',
      user: {
        id: '1',
        username: 'username',
        avatar: avatarImg
      }
    }
  }
};

export const NoAvatarLight: Story = {
  name: 'Коментарий без аватара профиля (light)',
  args: {
    comment: {
      text: 'some comment text',
      id: '1',
      user: {
        id: '1',
        username: 'username',
        avatar: ''
      }
    }
  }
};

export const NoAvatarDark: Story = {
  name: 'Коментарий без аватара профиля (dark)',
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    comment: {
      text: 'some comment text',
      id: '1',
      user: {
        id: '1',
        username: 'username',
        avatar: ''
      }
    }
  }
};
