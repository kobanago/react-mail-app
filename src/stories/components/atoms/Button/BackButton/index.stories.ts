import type { Meta, StoryObj } from '@storybook/react';

import { BackButton } from '.';

const meta = {
  title: 'Atoms/Button/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackButtonNormal: Story = {};
