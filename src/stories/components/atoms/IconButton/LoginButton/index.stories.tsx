import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { LoginButton } from '.';

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

export const LoginButtonNormal: Story = {
  args: {
    clickHandler: action('clicked'),
  },
};
export const LoginButtonDisable: Story = {
  args: {
    disabled: true,
  },
};
