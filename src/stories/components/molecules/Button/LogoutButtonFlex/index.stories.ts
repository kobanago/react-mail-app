import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButtonFlex } from '.';

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

export const LogoutButtonFlexExistData: Story = {
  args: {
    dataExistFlg: true,
  },
};
export const LogoutButtonFlexNotExistData: Story = {
  args: {
    dataExistFlg: false,
  },
};
