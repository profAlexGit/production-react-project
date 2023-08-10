import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  name: 'по умолчанию (light)'
};

export const DefaultDark: Story = {
  name: 'по умолчанию (dark)',
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const DefaultOrange: Story = {
  name: 'по умолчанию (orange)',
  decorators: [ThemeDecorator(Theme.ORANGE)]
};

export const Circle: Story = {
  name: 'Круглый skeleton (light)',
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  }
};

export const CircleDark: Story = {
  name: 'Круглый skeleton (dark)',
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    borderRadius: '50%',
    width: 100,
    height: 100
  }
};
