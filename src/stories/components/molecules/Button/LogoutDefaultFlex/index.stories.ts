import type { Meta, StoryObj } from '@storybook/react';

import { LogoutDefaultFlex } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

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

export const LogoutDefaultFlexNormal: Story = {
  decorators: createLoginMainPartsDecorator('not exist data'),
};
