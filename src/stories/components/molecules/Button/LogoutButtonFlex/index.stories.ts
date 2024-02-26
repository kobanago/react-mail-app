import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButtonFlex } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Molecules/Button/LogoutButtonFlex',
  component: LogoutButtonFlex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoutButtonFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LogoutButtonFlexNotAuth: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createCommonDecorator('not auth'),
};
export const LogoutButtonFlexNotExistData: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createCommonDecorator('not exist data'),
};
export const LogoutButtonFlexExistData: Story = {
  args: {
    dataExistFlg: true,
  },
  decorators: createCommonDecorator('exist data'),
};
