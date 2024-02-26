import { Meta, StoryObj } from '@storybook/react';

import { MessageForms } from '.';

import { createDecorator } from '@/stories/common/decorators';
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

const { createCommonDecorator } = createDecorator();
export const MessageFormsNormal: Story = {
  decorators: createCommonDecorator('exist data'),
};
