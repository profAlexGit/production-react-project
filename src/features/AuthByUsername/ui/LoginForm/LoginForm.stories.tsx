import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';

const initialState: DeepPartial<StateSchema> = {
  loginForm: {
    username: '',
    password: '',
    isLoading: false
  }
};

const loadingState: DeepPartial<StateSchema> = {
  loginForm: {
    username: 'name',
    password: 'password',
    isLoading: true
  }
};

const errorState: DeepPartial<StateSchema> = {
  loginForm: {
    username: 'name',
    password: 'password',
    isLoading: false,
    error: 'Какая-то ошибка'
  }
};

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [StoreDecorator(initialState)]
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
};

export const PendingForm: Story = {
  name: 'Форма во время отправки данных',
  decorators: [StoreDecorator(loadingState)]
};

export const ErrorForm: Story = {
  name: 'Форма с сообщением об ошибке',
  decorators: [StoreDecorator(errorState)]
};
