import type { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginPageNotLogin: Story = {
  decorators: createLoginMainPartsDecorator('not login'),
};
export const LoginPageNotAuth: Story = {
  decorators: createLoginMainPartsDecorator('not auth'),
};
export const LoginPageNotData: Story = {
  decorators: createLoginMainPartsDecorator('not exist data'),
};
export const LoginPageExistData: Story = {
  decorators: createLoginMainPartsDecorator('exist data'),
};
