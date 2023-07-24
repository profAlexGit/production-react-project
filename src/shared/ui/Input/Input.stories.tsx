import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'placeholder',
    value: '123'
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {

};
