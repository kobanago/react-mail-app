import { Meta, StoryObj } from '@storybook/react';

import { MessageForms } from '.';

import { createSendMainPartsDecorator } from '@/stories/common/decorators';
const meta: Meta = {
  title: 'Organisms/MessageForms',
  component: MessageForms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageForms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageFormsNormal: Story = {
  decorators: [createSendMainPartsDecorator('exist data')],
};
