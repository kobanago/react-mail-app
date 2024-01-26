import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

import data from '@/common/samples/addressList/index.json';

const meta = {
  title: 'Atoms/Select/Basic',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    selectHandler: action('test'),
    addressList: data,
  },
};
