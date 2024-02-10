import type { Meta, StoryObj } from '@storybook/react';

import { LogoutDefaultFlex } from '.';

const meta = {
  title: 'Molecules/Button/LogoutDefaultFlex',
  component: LogoutDefaultFlex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoutDefaultFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoutDefaultFlexExistData: Story = {};
