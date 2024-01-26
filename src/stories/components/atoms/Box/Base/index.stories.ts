import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '.';

const meta = {
  title: 'Atoms/Box/Base',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'Test',
  },
};
