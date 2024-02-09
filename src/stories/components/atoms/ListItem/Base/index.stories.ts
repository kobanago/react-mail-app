import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '.';

const meta = {
  title: 'Atoms/ListItem/Base',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    children: 'test',
    selectPersonHandler: action('click'),
  },
};
