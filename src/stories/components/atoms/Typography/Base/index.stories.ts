import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

const meta = {
  title: 'Atoms/Typography/Base',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'Test',
  },
};
