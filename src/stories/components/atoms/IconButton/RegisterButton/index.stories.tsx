import type { Meta, StoryObj } from '@storybook/react';

import { RegisterButton } from '.';

const meta = {
  title: 'Atoms/IconButton/RegisterButton',
  component: RegisterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RegisterButtonNormal: Story = {};
