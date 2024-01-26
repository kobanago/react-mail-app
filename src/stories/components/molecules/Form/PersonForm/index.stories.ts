import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '.';

const meta = {
  title: 'Molecules/Form/PersonForm',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonFormInit: Story = {
  args: {
    processResultFunc: action('input'),
  },
};
