import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from '@shared/config/storybookDecorators/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextTitle: Story = {
  name: 'only title',
  args: {
    title: 'Title'
  }
};

export const TextTitleDark: Story = {
  name: 'Dark: only title',
  args: {
    title: 'Title'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Texttext: Story = {
  name: 'only text',
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!'
  }
};

export const TexttextDark: Story = {
  name: 'Dark: only text',
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const TextFull: Story = {
  name: 'with title and text',
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!'
  }
};

export const TextFullDark: Story = {
  name: 'Dark: with title and text',
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorTextFull: Story = {
  name: 'error with title and text',
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!',
    theme: TextTheme.ERROR
  }
};

export const ErrorTextFullDark: Story = {
  name: 'Dark: error with title and text',
  args: {
    title: 'Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eveniet illo repellendus ullam. Ad assumenda error est ex iusto molestiae officiis praesentium quia quibusdam, recusandae repellendus, saepe totam vero voluptas!',
    theme: TextTheme.ERROR
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};
