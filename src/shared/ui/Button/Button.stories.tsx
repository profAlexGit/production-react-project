import type { Meta, StoryObj } from '@storybook/react';

import { Button, SizeButton, ThemeButton } from './Button';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
    size: SizeButton.M
  },
  argTypes: {
    size: SizeButton
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

export const ClearInvertedTheme: Story = {
  args: {
    theme: ThemeButton.CLEAR_INVERTED
  }
};

export const ClearInvertedDarkTheme: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.CLEAR_INVERTED
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

export const OutlineDangerLight: Story = {
  name: 'outline danger light',
  args: {
    theme: ThemeButton.OUTLINE_DANGER
  }
};

export const OutlineDangerDark: Story = {
  name: 'outline danger dark',
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.OUTLINE_DANGER
  }
};

export const BackgroundTheme: Story = {
  args: {
    theme: ThemeButton.BACKGROUND
  }
};

export const BackgroundThemeDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.BACKGROUND
  }
};

export const BackgroundInvertedTheme: Story = {
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED
  }
};

export const BackgroundInvertedThemeDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  args: {
    theme: ThemeButton.BACKGROUND_INVERTED
  }
};

export const SquareButton: Story = {
  argTypes: {
    size: SizeButton
  },
  args: {
    square: true,
    size: SizeButton.M,
    children: '>'
  }
};

export const SquareDarkButton: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK)
  ],
  argTypes: {
    size: SizeButton
  },
  args: {
    square: true,
    size: SizeButton.M,
    children: '>'
  }
};

export const DisabledPrimary: Story = {
  name: 'primary disabled',
  args: {
    disabled: true
  }
};
