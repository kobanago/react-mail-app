import type { Meta, StoryObj } from '@storybook/react';

import { BodySubText } from '.';

const meta = {
  title: 'Atoms/Typography/BodySubText',
  component: BodySubText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BodySubText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BodySubTextNormal: Story = {
  args: {
    children: 'Test',
  },
};
