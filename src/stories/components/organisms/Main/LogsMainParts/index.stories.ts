import type { Meta, StoryObj } from '@storybook/react';

import { LogsMainParts } from '.';

import data from '@/common/samples/data/index.json';

const meta = {
  title: 'Organisms/Main/LogsMainParts',
  component: LogsMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogsMainPartsNormal: Story = {
  args: {
    data: data['0001'].addressList,
    personId: '0001',
  },
};
export const LogsMainPartsNotExistData: Story = {
  args: {
    data: data['0001'].addressList,
    personId: '0003',
  },
};
