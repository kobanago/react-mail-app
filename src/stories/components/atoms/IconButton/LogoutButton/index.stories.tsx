import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButton } from '.';

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

export const LogoutButtonNormal: Story = {};
