import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonCommentCard } from './SkeletonCommentCard';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof SkeletonCommentCard> = {
  title: 'entities/Comment/SkeletonCommentCard',
  component: SkeletonCommentCard
};

export default meta;

type Story = StoryObj<typeof SkeletonCommentCard>;

export const DefaultLight: Story = {};
export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
