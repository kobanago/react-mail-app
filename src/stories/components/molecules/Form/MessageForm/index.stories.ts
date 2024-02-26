import type { Meta, StoryObj } from '@storybook/react';

import { MessageForm } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const MessageFormNormal: Story = {
  decorators: createCommonDecorator('exist data'),
};
