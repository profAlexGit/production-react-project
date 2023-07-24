import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Navbar } from './Navbar';
import { RouteDecorator } from '@shared/config/storybookDecorators/RouteDecorator';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    RouteDecorator,
    StoreDecorator({})
  ]
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
};

export const LightAuth: Story = {
  name: 'светлая тема, авторизованный пользователь',
  decorators: [StoreDecorator({ user: { authData: { id: '1', username: 'name' } } })]
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const DarkAuth: Story = {
  name: 'темная тема, авторизованный пользователь',
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: { id: '1', username: 'name' } } })
  ]
};
