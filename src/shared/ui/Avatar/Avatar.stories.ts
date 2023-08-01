import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
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
