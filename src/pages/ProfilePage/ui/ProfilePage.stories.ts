import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({})]
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  name: 'Светлая страница профиля'
};

export const Dark: Story = {
  name: 'Темная страница профиля',
  decorators: [ThemeDecorator(Theme.DARK)]
};
