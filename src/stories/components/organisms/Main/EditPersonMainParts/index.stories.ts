import type { Meta, StoryObj } from '@storybook/react';

import { EditPersonMainParts } from '.';

import { createEditPersonMainPartsDecorator } from '@/stories/common/decorators';

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

export const EditPersonMainPartsNoData: Story = {
  decorators: [createEditPersonMainPartsDecorator('not exist data')],
};
export const EditPersonMainPartsExistData: Story = {
  decorators: [createEditPersonMainPartsDecorator('exist data')],
};
