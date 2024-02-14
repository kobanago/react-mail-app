import type { Meta, StoryObj } from '@storybook/react';

import { CommonTemplate } from '.';

import {
  createEditPersonMainPartsDecorator,
  createLoginMainPartsDecorator,
  createSendMainPartsDecorator,
} from '@/stories/common/decorators';

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
  decorators: createLoginMainPartsDecorator('exist data'),
};
export const CommonTemplateMessage: Story = {
  args: {
    title: 'MESSAGE',
  },
  decorators: createSendMainPartsDecorator('exist data'),
};
export const CommonTemplatePerson: Story = {
  args: {
    title: 'PERSON',
  },
  decorators: createEditPersonMainPartsDecorator('exist data'),
};
