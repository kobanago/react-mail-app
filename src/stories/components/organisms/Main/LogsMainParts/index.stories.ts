import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { LogsMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Organisms/Main/LogsMainParts',
  component: LogsMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogsMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LogsMainPartsNoExistData: Story = {
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const noData = await canvas.findByText('no data');
    // Then
    await expect(noData).toBeInTheDocument();
  },
};
