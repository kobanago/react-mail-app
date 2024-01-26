import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta = {
  title: 'Atoms/TextField/Basic',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    label: 'Test',
    inputHandler: action('test'),
    disabledFlg: false,
    value: 'test',
  },
};

export const BasicDisable: Story = {
  args: {
    label: 'Test',
    disabledFlg: true,
    value: 'test',
  },
};
