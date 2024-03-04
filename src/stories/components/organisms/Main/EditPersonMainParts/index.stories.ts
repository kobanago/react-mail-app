import { expect, userEvent, within } from '@storybook/test';

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
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const noData = await canvas.findByText('no data');
    // Then
    await expect(noData).toBeInTheDocument();
  },
};
export const EditPersonMainPartsExistData: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const dataList = await canvas.findAllByRole('listitem');
    const edit = canvas.getByText('edit');
    // When
    await userEvent.click(edit);
    await userEvent.click(dataList[0]);
    // Then
    const name = await canvas.findByDisplayValue('test2');
    const email = await canvas.findByDisplayValue('test2@example.com');
    await expect(name).toBeInTheDocument();
    await expect(email).toBeInTheDocument();
  },
};
