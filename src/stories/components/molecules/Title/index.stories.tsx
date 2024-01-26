import { Meta, StoryObj } from '@storybook/react';

import { Title } from '.';

const meta: Meta = {
  title: 'Molecules/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Normal: Story = {
  args: {
    title: 'test',
    message: 'subtitle',
  },
};
