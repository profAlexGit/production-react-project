import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { PageLoader } from './PageLoader';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';

const meta: Meta<typeof PageLoader> = {
  title: 'shared/PageLoader',
  component: PageLoader,
  decorators: [
    RouteDecorator
  ]
};

export default meta;

type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
