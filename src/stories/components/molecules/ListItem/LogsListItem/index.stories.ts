import type { Meta, StoryObj } from '@storybook/react';

import { LogsListItem } from '.';

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
    item: {
      to: 'testTo',
      from: 'testFrom',
      time: '2024/0123 09:30',
      comment: 'first',
    },
  },
};
