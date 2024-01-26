import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { PersonForms } from '.';

const meta: Meta = {
  title: 'Organisms/PersonForms',
  component: PersonForms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonForms>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonFormsInit: Story = {
  args: {
    processResultFunc: action('test'),
    authHandler: action('test'),
  },
};
