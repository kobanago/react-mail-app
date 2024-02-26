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
} satisfies Meta<typeof SendStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const SendStateButtonInit: Story = {
  args: {
    keepHandler: action('click'),
    sendHandler: action('click'),
  },
  decorators: createCommonDecorator('not exist data'),
};
