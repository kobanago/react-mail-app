import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/IconButton/LogoutButton',
  component: LogoutButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LogoutButtonNormal: Story = {
  decorators: createCommonDecorator('not login'),
};
