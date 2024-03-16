import { expect, within, userEvent, fn, waitFor } from '@storybook/test';

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
    keepHandler: fn(),
    sendHandler: fn(),
  },
} satisfies Meta<typeof SendStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const SendStateButtonInit: Story = {
  decorators: createCommonDecorator('send state init'),
  play: async ({ args, canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const sendButton = canvas.getByText('ready to send is ok?');
    // When
    userEvent.click(sendButton);
    //Then
    await waitFor(() => {
      expect(args.keepHandler).toHaveBeenCalledOnce();
    });
  },
};
export const SendStateButtonKeep: Story = {
  decorators: createCommonDecorator('send state keep'),
  play: async ({ args, canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const keepButton = canvas.getByText('send message');
    // When
    userEvent.click(keepButton);
    //Then
    await waitFor(() => {
      expect(args.sendHandler).toHaveBeenCalledOnce();
    });
  },
};
export const SendStateButtonComplete: Story = {
  decorators: createCommonDecorator('send state complete'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const completeButton = canvas.getByText('complete send message!');
    // Then
    await expect(completeButton).toBeDisabled();
  },
};
