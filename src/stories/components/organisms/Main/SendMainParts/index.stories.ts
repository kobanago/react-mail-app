import { expect, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { SendMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Organisms/Main/SendMainParts',
  component: SendMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SendMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const SendMainPartsExistData: Story = {
  decorators: createCommonDecorator('select data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    await userEvent.click(optionsBase);
    // When
    const target = await canvas.findByText(/test2/);
    await userEvent.click(target);
    // Then
    const logs = await canvas.findByText('Display logs');
    await expect(logs).toBeInTheDocument();
  },
};
export const SendMainPartsExistDataOpenLogs: Story = {
  decorators: createCommonDecorator('select data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const select = canvas.getByTestId('select');
    const optionsBase = within(select).getByRole('combobox');
    await userEvent.click(optionsBase);
    const target = await canvas.findByText(/test2/);
    await userEvent.click(target);
    const logsOpen = await canvas.findByText('Display logs');
    // When
    await userEvent.click(logsOpen);
    // Then
    const logsList = await canvas.findAllByRole('listitem');
    await expect(logsList).toHaveLength(2);
    const logsClose = await canvas.findByText('Close logs');
    await expect(logsClose).toBeInTheDocument();
  },
};
