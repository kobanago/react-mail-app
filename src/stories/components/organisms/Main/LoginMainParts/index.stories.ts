import type { Meta, StoryObj } from '@storybook/react';

import { LoginMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const LoginMainPartsNotLogin: Story = {
  decorators: createCommonDecorator('not login'),
};
export const LoginMainPartsNotAuth: Story = {
  decorators: createCommonDecorator('not auth'),
};
export const LoginMainPartsNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
};
export const LoginMainPartsExistData: Story = {
  decorators: createCommonDecorator('exist data'),
};
