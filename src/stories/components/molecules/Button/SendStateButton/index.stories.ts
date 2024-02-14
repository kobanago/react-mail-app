import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { SendStateButton } from '.';

import { createSendMainPartsDecorator } from '@/stories/common/decorators';

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
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
  decorators: createSendMainPartsDecorator('exist data'),
};
export const SendStateButtonKeep: Story = {
  args: {
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
  decorators: createSendMainPartsDecorator('exist data', 1),
};
export const SendStateButtonComplete: Story = {
  args: {
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
  decorators: createSendMainPartsDecorator('exist data', 2),
};
