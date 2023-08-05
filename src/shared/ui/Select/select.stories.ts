import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

import { Currency } from '@entities/Currency';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  args: {
    value: Currency.EUR,
    options: [
      {
        content: 'RUB',
        value: Currency.RUB
      },
      {
        content: 'EUR',
        value: Currency.EUR
      },
      {
        content: 'USD',
        value: Currency.USD
      }
    ]
  }
};

export default meta;

type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  name: 'default'
};

export const SelectWithLabel: Story = {
  name: 'select with label',
  args: {
    label: 'выбрать'
  }
};
