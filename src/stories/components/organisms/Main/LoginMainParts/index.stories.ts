import type { Meta, StoryObj } from '@storybook/react';

import { LoginMainParts } from '.';

import data from '@/common/samples/data/index.json';

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
    data: data['0001'].addressList,
    authFlg: false,
  },
};
export const LoginMainPartsLogin: Story = {
  args: {
    data: data['0001'].addressList,
    authFlg: true,
  },
};
export const LoginMainPartsLoginNotExistData: Story = {
  args: {
    data: {},
    authFlg: true,
  },
};
