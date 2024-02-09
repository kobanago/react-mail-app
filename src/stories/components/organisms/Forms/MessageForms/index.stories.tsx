import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { MessageForms } from '.';

import data from '@/common/samples/data/index.json';

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
    data: data['0001'].addressList,
    message: 'test',
    handleChangePerson: action('select'),
    handleChangeMessage: action('input'),
    keepHandler: action('test'),
    sendHandler: action('test'),
    authHandler: action('test'),
    navigateHandler: action('test'),
    sendStateFlg: 0,
  },
};
