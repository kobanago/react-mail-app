import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { LogoutButtonFlex } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Molecules/Button/LogoutButtonFlex',
  component: LogoutButtonFlex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoutButtonFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LogoutButtonFlexNotAuth: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createCommonDecorator('not auth'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const registerButton = canvas.getByText('register your account');
    const logoutButton = canvas.getByText('logout');
    // Then
    await expect(registerButton).toBeEnabled();
    await expect(logoutButton).toBeEnabled();
  },
};
export const LogoutButtonFlexNotExistData: Story = {
  args: {
    dataExistFlg: false,
  },
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const editPersonButton = canvas.getByText('edit person');
    const logoutButton = canvas.getByText('logout');
    // Then
    await expect(editPersonButton).toBeEnabled();
    await expect(logoutButton).toBeEnabled();
  },
};
export const LogoutButtonFlexExistData: Story = {
  args: {
    dataExistFlg: true,
  },
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const editMessageButton = canvas.getByText('edit message');
    const editPersonButton = canvas.getByText('edit person');
    const logoutButton = canvas.getByText('logout');
    // Then
    await expect(editMessageButton).toBeEnabled();
    await expect(editPersonButton).toBeEnabled();
    await expect(logoutButton).toBeEnabled();
  },
};
