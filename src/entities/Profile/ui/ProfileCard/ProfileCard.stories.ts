import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { mockedProfileState } from '../../model/types/mockedProfileState';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const DefaultLight: Story = {
  name: 'С информацией о профиле (light)',
  args: {
    data: mockedProfileState.form,
    isLoading: false
  }
};

export const DefaultDark: Story = {
  name: 'С информацией о профиле (dark)',
  args: {
    data: mockedProfileState.form,
    isLoading: false
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const EditableLight: Story = {
  name: 'В режиме редактирования (light)',
  args: {
    data: mockedProfileState.form,
    isLoading: false,
    readonly: false
  }
};

export const EditableDark: Story = {
  name: 'В режиме редактирования (dark)',
  args: {
    data: mockedProfileState.form,
    isLoading: false,
    readonly: false
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const LoadingLight: Story = {
  name: 'Во время загрузки (light)',
  args: {
    isLoading: true
  }
};

export const LoadingDark: Story = {
  name: 'Во время загрузки (dark)',
  args: {
    isLoading: true
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const errorLoadingLight: Story = {
  name: 'Ошибка загрузки (light)',
  args: {
    isLoading: false,
    error: 'Не удалось загрузить данные профиля'
  }
};

export const errorLoadingDark: Story = {
  name: 'Ошибка загрузки (dark)',
  args: {
    isLoading: false,
    error: 'Не удалось загрузить данные профиля'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const noDataLight: Story = {
  name: 'Отсутствуют данные (light)',
  args: {
    isLoading: false
  }
};

export const noDataDark: Story = {
  name: 'Отсутствуют данные (dark)',
  args: {
    isLoading: false
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
