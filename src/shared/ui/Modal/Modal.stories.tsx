import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '@shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid autem cum dignissimos dolorum ducimus excepturi expedita inventore ipsum minima nisi optio perferendis perspiciatis quibusdam quo repellat sit, voluptate voluptatibus!',
    isOpen: true
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalDefault: Story = {

};
