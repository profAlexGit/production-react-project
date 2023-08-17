import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'change/CommentList',
  component: CommentList
};

export default meta;

type Story = StoryObj<typeof CommentList>;

export const Default: Story = {};
