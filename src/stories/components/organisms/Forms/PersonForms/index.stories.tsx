import { Meta, StoryObj } from '@storybook/react';

import { PersonForms } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const PersonFormsNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
};
export const PersonFormsExistData: Story = {
  decorators: createCommonDecorator('exist data'),
};
