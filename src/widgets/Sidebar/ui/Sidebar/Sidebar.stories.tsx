import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
