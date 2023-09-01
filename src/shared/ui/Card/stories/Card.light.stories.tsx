import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../Card';
import { Text } from '@shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card/light',
  component: Card,
  args: {
    children: <Text text="some text"/>
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
