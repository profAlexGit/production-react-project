import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [RouteDecorator]
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
