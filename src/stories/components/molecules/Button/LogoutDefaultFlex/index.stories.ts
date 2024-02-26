import type { Meta, StoryObj } from '@storybook/react';

import { LogoutDefaultFlex } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const LogoutDefaultFlexNormal: Story = {
  decorators: createCommonDecorator('not exist data'),
};
