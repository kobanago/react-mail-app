import type { Meta, StoryObj } from '@storybook/react';

import { LogsMainParts } from '.';

import { createSendMainPartsDecorator } from '@/stories/common/decorators';

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

export const LogsMainPartsNoExistData: Story = {
  decorators: createSendMainPartsDecorator('not exist data'),
};
export const LogsMainPartsExistData: Story = {
  decorators: createSendMainPartsDecorator('select data'),
};
