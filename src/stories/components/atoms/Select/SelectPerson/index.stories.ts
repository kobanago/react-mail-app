import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { SelectPerson } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const SelectPersonNormal: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const label = canvas.getByText('To');
    // Then
    await expect(label).toBeInTheDocument();
  },
};
