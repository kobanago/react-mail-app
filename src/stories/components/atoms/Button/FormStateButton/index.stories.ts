import { action } from '@storybook/addon-actions';
import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { FormStateButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/Button/FormStateButton',
  component: FormStateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    clickHandler: action('click'),
  },
} satisfies Meta<typeof FormStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const FormStateButtonNormal: Story = {
  args: {
    processing: false,
    disabled: false,
  },
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    // Then
    await expect(button).toBeEnabled();
  },
};
export const FormStateButtonNormalProcess: Story = {
  args: {
    processing: true,
    disabled: false,
  },
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const button = canvas.getByText(/end/);
    // Then
    await expect(button).toBeInTheDocument();
  },
};
export const FormStateButtonNormalDisabled: Story = {
  args: {
    processing: false,
    disabled: true,
  },
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    // Then
    await expect(button).toBeDisabled();
  },
};
export const FormStateButtonProcessDisabled: Story = {
  args: {
    processing: true,
    disabled: true,
  },
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    // Then
    await expect(button).toBeDisabled();
  },
};
