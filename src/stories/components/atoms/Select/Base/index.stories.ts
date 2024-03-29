import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

const meta = {
  title: 'Atoms/Select/Base',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    selectHandler: action('test'),
  },
};
