import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonCommentCard } from './SkeletonCommentCard';

const meta: Meta<typeof SkeletonCommentCard> = {
  title: 'change/SkeletonCommentCard',
  component: SkeletonCommentCard
};

export default meta;

type Story = StoryObj<typeof SkeletonCommentCard>;

export const Default: Story = {};
