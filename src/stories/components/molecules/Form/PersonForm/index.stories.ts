import type { Meta, StoryObj } from '@storybook/react';

import { PersonForm } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const PersonFormNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
};
export const PersonFormExistData: Story = {
  decorators: createCommonDecorator('exist data'),
};
