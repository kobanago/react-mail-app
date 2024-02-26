import type { Meta, StoryObj } from '@storybook/react';

import { EditPersonMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Organisms/Main/EditPersonMainParts',
  component: EditPersonMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditPersonMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const EditPersonMainPartsNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
};
export const EditPersonMainPartsExistData: Story = {
  decorators: createCommonDecorator('exist data'),
};
