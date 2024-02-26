import type { Meta, StoryObj } from '@storybook/react';

import { LoginButton } from '.';

import { createDecorator } from '@/stories/common/decorators';
const meta = {
  title: 'Atoms/IconButton/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LoginButtonNormal: Story = {
  decorators: createCommonDecorator('not login'),
};
