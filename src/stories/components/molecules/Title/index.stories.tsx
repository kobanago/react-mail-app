import { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Title } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta: Meta = {
  title: 'Molecules/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'test',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;
const { createCommonDecorator } = createDecorator();
export const TitleNotLogin: Story = {
  decorators: createCommonDecorator('not login'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const str = canvas.getByText(/please login/);
    // Then
    await expect(str).toBeInTheDocument();
  },
};
export const TitleLogin: Story = {
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const strLogin = await canvas.findByText(/login user : test/);
    // Then
    await expect(strLogin).toBeInTheDocument();
  },
};
