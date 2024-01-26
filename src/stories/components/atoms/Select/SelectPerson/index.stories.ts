import type { Meta, StoryObj } from '@storybook/react';

import { SelectPerson } from '.';

import data from '@/common/samples/data/index.json';

const meta = {
  title: 'Atoms/Select/SelectPerson',
  component: SelectPerson,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectPersonInit: Story = {
  args: {
    data: data['0001'].addressList,
  },
};
