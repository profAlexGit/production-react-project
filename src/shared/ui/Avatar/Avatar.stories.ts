import type { Meta, StoryObj } from '@storybook/react';
import avatarImg from '@shared/assets/avatar.jpg';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: avatarImg
  }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const DefaultAvatar: Story = {
  name: 'аватар без size'
};

export const AvatarSize100: Story = {
  name: 'size 100',
  args: {
    size: 100
  }
};
