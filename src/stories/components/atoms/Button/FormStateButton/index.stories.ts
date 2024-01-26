import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { FormStateButton } from '.';

const meta = {
  title: 'Atoms/Button/FormStateButton',
  component: FormStateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormStateButtonNormal: Story = {
  args: {
    processing: true,
    label: 'Button',
    clickHandler: action('clicked'),
  },
};

export const FormStateButtonDisabled: Story = {
  args: {
    ...FormStateButtonNormal.args,
    disabled: true,
  },
};
