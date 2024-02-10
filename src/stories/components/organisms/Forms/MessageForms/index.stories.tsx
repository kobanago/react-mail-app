import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { MessageForms } from '.';
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
  args: {
    handleChangePerson: action('select'),
    handleChangeMessage: action('input'),
    keepHandler: action('test'),
    sendHandler: action('test'),
    authHandler: action('test'),
    navigateHandler: action('test'),
  },
};
