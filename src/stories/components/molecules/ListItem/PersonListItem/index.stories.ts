import type { Meta, StoryObj } from '@storybook/react';

import { PersonListItem } from '.';

const meta = {
  title: 'Molecules/ListItem/PersonListItem',
  component: PersonListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonListItemNormal: Story = {
  args: {
    id: '1',
    message: 'test',
  },
};
