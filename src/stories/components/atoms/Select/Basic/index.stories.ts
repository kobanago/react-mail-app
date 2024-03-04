import { expect, userEvent, within, waitFor, fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

import { createDecorator } from '@/stories/common/decorators';
const meta = {
  title: 'Atoms/Select/Basic',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    selectHandler: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const BasicNormal: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    // When
    await userEvent.click(optionsBase);
    const options = canvas.getByTestId('select-options');
    // Then
    await expect(options).toHaveTextContent(/test2/);
  },
};
export const BasicSelect: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ args, canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    // When
    await userEvent.click(optionsBase);
    const options = canvas.getByTestId('select-options');
    await userEvent.click(within(options).getByText('test2 (test2@example.com)'));
    // Then
    await waitFor(() => {
      expect(args.selectHandler).toHaveBeenCalledOnce();
    });
  },
};
