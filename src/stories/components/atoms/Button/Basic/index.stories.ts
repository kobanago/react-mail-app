import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button/Basic',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    label: 'Button',
    clickHandler: action('clicked'),
  },
};

export const BasicDisabled: Story = {
  args: {
    ...BasicNormal.args,
    disabled: true,
  },
};
