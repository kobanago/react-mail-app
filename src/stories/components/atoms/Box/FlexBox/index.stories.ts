import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '.';

const meta = {
  title: 'Atoms/Box/FlexBox',
  component: FlexBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlexBoxNormal: Story = {
  args: {
    children: 'Test',
  },
};
