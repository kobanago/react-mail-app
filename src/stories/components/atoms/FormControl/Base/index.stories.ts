import type { Meta, StoryObj } from '@storybook/react';

import { FormControl } from '.';

const meta = {
  title: 'Atoms/FormControl/Base',
  component: FormControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'Test',
  },
};
