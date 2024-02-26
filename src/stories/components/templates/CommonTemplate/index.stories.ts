import type { Meta, StoryObj } from '@storybook/react';

import { CommonTemplate } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Templates/CommonTemplate',
  component: CommonTemplate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const CommonTemplateLogin: Story = {
  args: {
    title: 'LOGIN',
  },
  decorators: createCommonDecorator('exist data'),
};
export const CommonTemplateMessage: Story = {
  args: {
    title: 'MESSAGE',
  },
  decorators: createCommonDecorator('select data'),
};
export const CommonTemplatePerson: Story = {
  args: {
    title: 'PERSON',
  },
  decorators: createCommonDecorator('exist data'),
};
