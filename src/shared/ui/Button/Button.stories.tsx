import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {

};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR
  }
};

export const ClearDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.CLEAR
  }
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE
  }
};

export const OutlineDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.OUTLINE
  }
};
