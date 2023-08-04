import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { ProfilePage } from './ProfilePage';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';
import { ValidationProfileError } from '@entities/Profile/model/types/profile';
import { mockedProfileState } from '@entities/Profile';

const profileFormState = {
  profile: {
    ...mockedProfileState
  }
};

const profileEditableState = {
  profile: {
    ...mockedProfileState,
    readonly: false
  }
};

const validationErrorDataProfileState = {
  profile: {
    ...mockedProfileState,
    validateError: [ValidationProfileError.INCORRECT_USER_DATA]
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
  name: 'Страница профиля (light)',
  decorators: [StoreDecorator(profileFormState)]
};

export const Dark: Story = {
  name: 'Страница профиля (dark)',
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(profileFormState)]
};

export const EditableLight: Story = {
  name: 'Радктирование (light)',
  decorators: [StoreDecorator(profileEditableState)]
};

export const EditableDark: Story = {
  name: 'Радктирование (dark)',
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(profileEditableState)]
};

export const LightWithErrorValidation: Story = {
  name: 'Страница профиля с ошибкой валидации данных (light)',
  decorators: [StoreDecorator(validationErrorDataProfileState)]
};

export const DarkWithErrorValidation: Story = {
  name: 'Страница профиля с ошибкой валидации данных (dark)',
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(validationErrorDataProfileState)]
};
