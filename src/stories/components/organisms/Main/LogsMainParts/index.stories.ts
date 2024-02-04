import type { Meta, StoryObj } from '@storybook/react';

import { LogsMainParts } from '.';

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

export const LogsMainPartsNormal: Story = {};
