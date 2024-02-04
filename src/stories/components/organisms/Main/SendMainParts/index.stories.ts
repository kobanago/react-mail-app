import type { Meta, StoryObj } from '@storybook/react';

import { SendMainParts } from '.';

const meta = {
  title: 'Organisms/Main/SendMainParts',
  component: SendMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SendMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SendMainPartsNormal: Story = {};
