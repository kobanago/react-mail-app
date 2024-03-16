import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { LoginMainParts } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Organisms/Main/LoginMainParts',
  component: LoginMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const LoginMainPartsNotLogin: Story = {
  decorators: createCommonDecorator('not login'),
};
export const LoginMainPartsNotAuth: Story = {
  decorators: createCommonDecorator('not auth'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const noData = await canvas.findByText('no data');
    // Then
    await expect(noData).toBeInTheDocument();
  },
};
export const LoginMainPartsNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const loginNoData = await canvas.findByText('no data');
    // Then
    await expect(loginNoData).toBeInTheDocument();
  },
};
export const LoginMainPartsExistData: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const dataList = await canvas.findAllByRole('listitem');
    // Then
    await expect(dataList).toHaveLength(3);
  },
};
