import type { Meta, StoryObj } from '@storybook/react';

import { SelectPerson } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/Select/SelectPerson',
  component: SelectPerson,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectPersonNormal: Story = {
  decorators: [createLoginMainPartsDecorator('exist data')],
};
