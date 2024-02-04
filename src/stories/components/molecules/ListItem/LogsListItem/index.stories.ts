import type { Meta, StoryObj } from '@storybook/react';

import { LogsListItem } from '.';

import data from '@/common/samples/data/messageList.json';

const meta = {
  title: 'Molecules/ListItem/LogsListItem',
  component: LogsListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogsListItemNormal: Story = {
  args: {
    key: 1,
    item: data[1],
  },
};
