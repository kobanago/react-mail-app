import type { Meta, StoryObj } from '@storybook/react';

import { PersonList } from '.';

import data from '@/common/samples/data/index.json';

const meta = {
  title: 'Molecules/List/PersonList',
  component: PersonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonListInit: Story = {
  args: {
    data: data['0001'].addressList,
  },
};
