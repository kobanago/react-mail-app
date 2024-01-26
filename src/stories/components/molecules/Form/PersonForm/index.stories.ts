import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { PersonForm } from '.';

const meta = {
  title: 'Molecules/Form/PersonForm',
  component: PersonForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonFormInit: Story = {
  args: {
    processResultFunc: action('input'),
  },
};
