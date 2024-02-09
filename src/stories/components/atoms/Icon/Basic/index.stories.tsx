import EditNoteIcon from '@mui/icons-material/EditNote';

import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

const meta = {
  title: 'Atoms/Icon/Basic',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicNormal: Story = {
  args: {
    icon: <EditNoteIcon />,
  },
};
