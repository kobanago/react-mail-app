import type { Meta, StoryObj } from '@storybook/react';

import { BackButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/Button/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const BackButtonNormal: Story = {
  decorators: createCommonDecorator('not exist data'),
};
