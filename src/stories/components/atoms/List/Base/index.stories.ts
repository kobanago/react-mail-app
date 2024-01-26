import type { Meta, StoryObj } from '@storybook/react';

import { List } from '.';

const meta = {
  title: 'Atoms/List/Base',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'Test',
  },
};
