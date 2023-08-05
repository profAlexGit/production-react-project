import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';
import { Country } from '@entities/Country';

const meta: Meta<typeof CountrySelect> = {
  title: 'entities/Country/CountrySelect',
  component: CountrySelect,
  args: {
    value: Country.Russia
  }
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const DefaultSelect: Story = {
  name: 'default'
};
