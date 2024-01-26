import type { Meta, StoryObj } from '@storybook/react';

import { MessageForm } from '.';

import data from '@/common/samples/data/index.json';

const meta = {
  title: 'Molecules/Form/MessageForm',
  component: MessageForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageFormNormal: Story = {
  args: {
    data: data['0001'].addressList,
  },
};
