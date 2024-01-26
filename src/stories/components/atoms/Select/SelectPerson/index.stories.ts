import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { SelectPerson } from '.';

import data from '@/common/samples/addressList/index.json';

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
    selectHandler: action('click'),
    addressList: data,
  },
};
