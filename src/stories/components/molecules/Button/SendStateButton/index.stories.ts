import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { SendStateButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Molecules/Button/SendStateButton',
  component: SendStateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
} satisfies Meta<typeof SendStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const SendStateButtonInit: Story = {
  decorators: createCommonDecorator('send state init'),
};
export const SendStateButtonKeep: Story = {
  decorators: createCommonDecorator('send state keep'),
};
export const SendStateButtonComplete: Story = {
  decorators: createCommonDecorator('send state complete'),
};
