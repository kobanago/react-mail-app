import type { Meta, StoryObj } from '@storybook/react';

import { LogsList } from '.';

import data from '@/common/samples/data/messageList.json';
import { MessageType } from '@/stories/common/types/db';

const meta = {
  title: 'Molecules/List/LogsList',
  component: LogsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogsListNormal: Story = {
  args: {
    messageLog: data as MessageType[],
  },
};
