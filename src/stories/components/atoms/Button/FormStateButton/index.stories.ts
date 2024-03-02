import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { FormStateButton } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Atoms/Button/FormStateButton',
  component: FormStateButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormStateButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const FormStateButtonNormal: Story = {
  args: {
    processing: true,
    label: 'Button',
    clickHandler: action('clicked'),
  },
  decorators: createCommonDecorator('not exist data'),
};

export const FormStateButtonDisabled: Story = {
  args: {
    ...FormStateButtonNormal.args,
    disabled: true,
  },
  decorators: createCommonDecorator('not exist data'),
};
