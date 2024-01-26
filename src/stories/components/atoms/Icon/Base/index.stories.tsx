import EditNoteIcon from '@mui/icons-material/EditNote';

import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

const meta = {
  title: 'Atoms/Icon/Base',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    icon: <EditNoteIcon />,
  },
};
