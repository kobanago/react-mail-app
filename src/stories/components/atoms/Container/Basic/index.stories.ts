import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '.';

const meta = {
  title: 'Atoms/Container/Basic',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    children: 'Test',
  },
};
