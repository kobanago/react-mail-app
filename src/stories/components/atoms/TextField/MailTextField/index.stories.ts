import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { MailTextField } from '.';

const meta = {
  title: 'Atoms/TextField/MailTextField',
  component: MailTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MailTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MailTextFieldNormal: Story = {
  args: {
    label: 'Test',
    inputHandler: action('test'),
    disabledFlg: false,
  },
};

export const MailTextFieldDisable: Story = {
  args: {
    label: 'Test',
    disabledFlg: true,
  },
};
