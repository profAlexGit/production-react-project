import type { Meta, StoryObj } from '@storybook/react';
import { AddCommentForm } from './AddCommentForm';
import { type DeepPartial } from 'redux';
import { type StateSchema } from '@app/providers/StoreProvider';
import { StoreDecorator } from '@shared/config/storybookDecorators/StoreDecorator';

const initialState: DeepPartial<StateSchema> = {
  addCommentFormSchema: {
    text: 'comment',
    error: null
  }
};

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  decorators: [StoreDecorator(initialState)]
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {};
