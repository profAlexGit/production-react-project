import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
