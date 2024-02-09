import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

import data from '@/common/samples/data/index.json';

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
    data: data['0001'].addressList,
  },
};
