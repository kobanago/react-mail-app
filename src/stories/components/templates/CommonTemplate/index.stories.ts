import type { Meta, StoryObj } from '@storybook/react';

import { CommonTemplate } from '.';

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

export const CommonTemplateLogin: Story = {
  args: {
    title: 'LOGIN',
  },
};
export const CommonTemplateMessage: Story = {
  args: {
    title: 'MESSAGE',
  },
};
export const CommonTemplatePerson: Story = {
  args: {
    title: 'PERSON',
  },
};
