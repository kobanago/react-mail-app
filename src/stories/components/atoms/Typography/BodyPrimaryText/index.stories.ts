import type { Meta, StoryObj } from '@storybook/react';

import { BodyPrimaryText } from '.';

const meta = {
  title: 'Atoms/Typography/BodyPrimaryText',
  component: BodyPrimaryText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BodyPrimaryText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BodyPrimaryTextNormal: Story = {
  args: {
    children: 'Test',
  },
};
