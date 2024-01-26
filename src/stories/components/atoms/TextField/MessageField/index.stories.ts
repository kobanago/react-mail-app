import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { MessageTextField } from '.';

const meta = {
  title: 'Atoms/TextField/MessageTextField',
  component: MessageTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageTextFieldNormal: Story = {
  args: {
    inputHandler: action('test'),
    disabledFlg: false,
  },
};

export const MessageTextFieldDisable: Story = {
  args: {
    label: 'Test',
    disabledFlg: true,
  },
};
