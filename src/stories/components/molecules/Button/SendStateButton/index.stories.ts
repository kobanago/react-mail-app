import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { SendStateButton } from '.';

const meta = {
  title: 'Molecules/Button/SendStateButton',
  component: SendStateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SendStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SendStateButtonInit: Story = {
  args: {
    sendStateFlg: 0,
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
};
export const SendStateButtonProcess: Story = {
  args: {
    sendStateFlg: 1,
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
};
export const SendStateButtonCompleted: Story = {
  args: {
    sendStateFlg: 2,
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
};
