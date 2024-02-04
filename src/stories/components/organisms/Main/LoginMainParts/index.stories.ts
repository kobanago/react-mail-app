import type { Meta, StoryObj } from '@storybook/react';

import { LoginMainParts } from '.';

const meta = {
  title: 'Organisms/Main/LoginMainParts',
  component: LoginMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginMainPartsLogout: Story = {
  args: {
    authFlg: false,
  },
};
export const LoginMainPartsLogin: Story = {
  args: {
    authFlg: true,
  },
};
export const LoginMainPartsLoginNotExistData: Story = {
  args: {
    data: null,
    authFlg: true,
  },
};
