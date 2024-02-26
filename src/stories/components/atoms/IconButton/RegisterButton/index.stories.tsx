import type { Meta, StoryObj } from '@storybook/react';

import { RegisterButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/IconButton/RegisterButton',
  component: RegisterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const RegisterButtonNormal: Story = {
  decorators: createCommonDecorator('not auth'),
};
