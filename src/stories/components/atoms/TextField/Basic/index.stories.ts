import { action } from '@storybook/addon-actions';
import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta = {
  title: 'Atoms/TextField/Basic',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Test',
    inputHandler: action('input'),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    disabledFlg: false,
  },
};

export const BasicDisable: Story = {
  args: {
    disabledFlg: true,
  },
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const disableTextField = canvas.getByText('Test');
    //Then
    await expect(disableTextField).toBeDisabled();
  },
};
