import type { Meta, StoryObj } from '@storybook/react';

import { EditMainParts } from '.';

import data from '@/common/samples/data/index.json';

const meta = {
  title: 'Organisms/Main/EditMainParts',
  component: EditMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditMainPartsNormal: Story = {
  args: {
    data: data['0001'].addressList,
  },
};
