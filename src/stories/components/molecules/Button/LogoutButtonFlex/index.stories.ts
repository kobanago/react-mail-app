import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButtonFlex } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

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

export const LogoutButtonFlexNotAuth: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createLoginMainPartsDecorator('not auth'),
};
export const LogoutButtonFlexNotExistData: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createLoginMainPartsDecorator('not exist data'),
};
export const LogoutButtonFlexExistData: Story = {
  args: {
    dataExistFlg: true,
  },
  decorators: createLoginMainPartsDecorator('exist data'),
};
