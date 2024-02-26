import type { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const LoginPageNotLogin: Story = {
  decorators: createCommonDecorator('not login'),
};
export const LoginPageNotAuth: Story = {
  decorators: createCommonDecorator('not auth'),
};
export const LoginPageNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
};
export const LoginPageExistData: Story = {
  decorators: createCommonDecorator('exist data'),
};
