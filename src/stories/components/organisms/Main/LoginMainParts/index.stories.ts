import type { Meta, StoryObj } from '@storybook/react';

import { LoginMainParts } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

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

export const LoginMainPartsNotLogin: Story = {
  decorators: [createLoginMainPartsDecorator('not login')],
};
export const LoginMainPartsNotAuth: Story = {
  decorators: [createLoginMainPartsDecorator('not auth')],
};
export const LoginMainPartsNotExistData: Story = {
  decorators: [createLoginMainPartsDecorator('not exist data')],
};
export const LoginMainPartsExistData: Story = {
  decorators: [createLoginMainPartsDecorator('exist data')],
};
