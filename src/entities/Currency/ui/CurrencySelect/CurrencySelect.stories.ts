import type { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';
import { Currency } from '@entities/Currency';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/Currency/CurrencySelect',
  component: CurrencySelect,
  args: {
    value: Currency.USD
  }
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const DefaultSelect: Story = {
  name: 'default'
};
