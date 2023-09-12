import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSkeleton } from './ArticleSkeleton';

const meta: Meta<typeof ArticleSkeleton> = {
  title: 'entities/Article/ArticleSkeleton',
  component: ArticleSkeleton
};

export default meta;

type Story = StoryObj<typeof ArticleSkeleton>;

export const Default: Story = {};
