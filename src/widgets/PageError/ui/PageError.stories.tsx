import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { PageError } from './PageError';

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
};
