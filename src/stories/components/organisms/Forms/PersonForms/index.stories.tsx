import { Meta, StoryObj } from '@storybook/react';

import { PersonForms } from '.';

import { createEditPersonMainPartsDecorator } from '@/stories/common/decorators';

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

export const PersonFormsNoData: Story = {
  decorators: [createEditPersonMainPartsDecorator('not exist data')],
};
export const PersonFormsExistData: Story = {
  decorators: [createEditPersonMainPartsDecorator('exist data')],
};
