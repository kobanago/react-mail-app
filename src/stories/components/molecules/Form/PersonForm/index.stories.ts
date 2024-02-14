import type { Meta, StoryObj } from '@storybook/react';

import { PersonForm } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

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

export const PersonFormNoData: Story = {
  decorators: [createLoginMainPartsDecorator('not exist data')],
};
export const PersonFormExistData: Story = {
  decorators: [createLoginMainPartsDecorator('exist data')],
};
