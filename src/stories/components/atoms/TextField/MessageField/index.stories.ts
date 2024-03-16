import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { MessageTextField } from '.';

const meta = {
  title: 'Atoms/TextField/MessageTextField',
  component: MessageTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Test',
    disabledFlg: false,
  },
} satisfies Meta<typeof MessageTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageTextFieldNormal: Story = {
  args: {
    disabledFlg: false,
  },
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const textField = canvas.getByText('Message');
    //Then
    await expect(textField).toBeRequired();
  },
};
