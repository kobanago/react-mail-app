import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from '.';

const meta = {
  title: 'Atoms/Paper/Basic',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    children: 'Test',
  },
};
