import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';
import { Text } from '@shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card/dark',
  component: Card,
  args: {
    children: <Text text="some text"/>
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
