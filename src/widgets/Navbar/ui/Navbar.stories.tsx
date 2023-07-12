import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Navbar } from './Navbar';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    RouteDecorator
  ]
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
