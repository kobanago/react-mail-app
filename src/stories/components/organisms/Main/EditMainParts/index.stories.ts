import type { Meta, StoryObj } from '@storybook/react';

import { EditMainParts } from '.';

import data from '@/common/samples/addressList/index.json';

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
    data: data,
  },
};
