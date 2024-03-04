import { expect, fn, userEvent, waitFor, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { MailTextField } from '.';

const meta = {
  title: 'Atoms/TextField/MailTextField',
  component: MailTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Test',
    disabledFlg: false,
    inputHandler: fn(),
  },
} satisfies Meta<typeof MailTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MailTextFieldNormal: Story = {
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const textField = canvas.getByText('Email');
    //Then
    await expect(textField).toBeRequired();
  },
};
export const MailTextFieldValid: Story = {
  play: async ({ args, canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const textFieldValid = canvas.getByText('Email');
    // When
    userEvent.type(textFieldValid, 'test@example.com');
    //Then
    await waitFor(() => {
      expect(args.inputHandler).toHaveBeenCalled();
    });
  },
};
export const MailTextFieldInalidNull: Story = {
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const textFieldNull = canvas.getByText('Email');
    const regexNull = 'このフィールドを入力してください。';
    // When
    userEvent.type(textFieldNull, 'a');
    userEvent.type(textFieldNull, '{backspace}');
    //Then
    await waitFor(() => {
      expect(canvas.getByText(regexNull)).toBeInTheDocument();
      expect(textFieldNull).toBeInvalid();
    });
  },
};
export const MailTextFieldInalidEmail: Story = {
  play: async ({ args, canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const textFieldEmail = canvas.getByText('Email');
    const regexEmail = /.*「@」を挿入してください。.*/;
    // When
    userEvent.type(textFieldEmail, 'test');
    //Then
    await waitFor(() => {
      expect(args.inputHandler).toHaveBeenCalledTimes(4);
      expect(canvas.getByText(regexEmail)).toBeInTheDocument();
      expect(textFieldEmail).toBeInvalid();
    });
  },
};
