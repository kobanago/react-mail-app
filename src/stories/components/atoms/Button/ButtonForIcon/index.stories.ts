import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { ButtonForIcon } from '.';

const meta = {
  title: 'Atoms/Button/ButtonForIcon',
  component: ButtonForIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonForIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonForIconNormal: Story = {
  args: {
    label: 'ButtonForIcon',
    clickHandler: action('clicked'),
  },
};

export const ButtonForIconDisabled: Story = {
  args: {
    ...ButtonForIconNormal.args,
    disabled: true,
  },
};
