import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';
import { ValidationProfileError } from '@entities/Profile/model/types/profile';

const validationErrorProfileState = {
  profile: {
    validateError: [ValidationProfileError.SERVER_ERROR],
    isLoading: false,
    readonly: true
  }
};

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

export const LightWithError: Story = {
  name: 'Светлая страница профиля с ошибкой',
  decorators: [StoreDecorator(validationErrorProfileState)]
};

export const DarkWithError: Story = {
  name: 'Темная страница профиля с ошибкой',
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(validationErrorProfileState)]
};
