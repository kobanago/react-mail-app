import { Meta, StoryObj } from '@storybook/react';

import { Title } from '.';

import { createDecorator } from '@/stories/common/decorators';

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
const { createCommonDecorator } = createDecorator();
export const TitleNotLogin: Story = {
  args: {
    title: 'test',
  },
  decorators: createCommonDecorator('not login'),
};
export const TitleLogin: Story = {
  args: {
    title: 'test',
  },
  decorators: createCommonDecorator('not exist data'),
};
