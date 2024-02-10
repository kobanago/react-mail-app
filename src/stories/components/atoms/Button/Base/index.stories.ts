import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button/Base',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    label: 'Button',
    clickHandler: action('clicked'),
  },
};

export const BaseDisabled: Story = {
  args: {
    ...BaseNormal.args,
    disabled: true,
  },
};
