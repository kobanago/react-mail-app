import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { MessageForms } from '.';

import { createDecorator } from '@/stories/common/decorators';
const meta: Meta = {
  title: 'Organisms/MessageForms',
  component: MessageForms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageForms>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const MessageFormsNormal: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const button = canvas.getByText(/ready/);
    // Then
    await expect(button).toBeDisabled();
  },
};
export const MessageFormsNormalSelect: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    const button = canvas.getByText(/ready/);
    await userEvent.click(optionsBase);
    // When
    await userEvent.click(canvas.getByText(/test2/));
    // Then
    await expect(button).toBeDisabled();
  },
};
export const MessageFormsNormalInput: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const input = canvas.getByText('Message');
    const button = canvas.getByText(/ready/);
    // When
    await userEvent.type(input, 'message');
    // Then
    await expect(button).toBeDisabled();
  },
};
export const MessageFormsNormalFormComplete: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const input = canvas.getByText('Message');
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    const button = canvas.getByText(/ready/);
    await userEvent.type(input, 'message');
    await userEvent.click(optionsBase);
    // When
    await userEvent.click(canvas.getByText(/test2/));
    // Then
    await expect(button).toBeEnabled();
  },
};
export const MessageFormsNormalFormInputDelete: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const input = canvas.getByText('Message');
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    const button = canvas.getByText(/ready/);
    await userEvent.click(optionsBase);
    await userEvent.click(canvas.getByText(/test2/));
    await userEvent.type(input, 'm');
    await userEvent.click(button); //State：Keep
    // When
    await userEvent.type(input, '{backspace}');
    // Then
    await expect(button).toBeDisabled();
  },
};
export const MessageFormsNormalSendComplete: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const input = canvas.getByText('Message');
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    const button = canvas.getByText(/ready/);
    await userEvent.type(input, 'message');
    await userEvent.click(optionsBase);
    await userEvent.click(canvas.getByText(/test2/));
    await userEvent.click(button);
    // When
    await userEvent.click(canvas.getByText(/send/));
    // Then
    await expect(input).not.toHaveValue();
  },
};
