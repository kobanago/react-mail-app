import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '.';

const meta = {
  title: 'Atoms/Container/Base',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'Test',
  },
};
