import type { Meta, StoryObj } from '@storybook/react';

import { SendMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Organisms/Main/SendMainParts',
  component: SendMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SendMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const SendMainPartsExistData: Story = {
  decorators: createCommonDecorator('select data'),
};
