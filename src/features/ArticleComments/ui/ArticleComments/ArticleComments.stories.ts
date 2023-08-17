import type { Meta, StoryObj } from '@storybook/react';
import { ArticleComments } from './ArticleComments';

const meta: Meta<typeof ArticleComments> = {
  title: 'change/ArticleComments',
  component: ArticleComments
};

export default meta;

type Story = StoryObj<typeof ArticleComments>;

export const Default: Story = {};
