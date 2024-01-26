import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta = {
  title: 'Atoms/TextField/Base',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    disabledFlg: false,
    inputHandler: action('test'),
  },
};
export const BaseDisable: Story = {
  args: {
    disabledFlg: true,
  },
};
