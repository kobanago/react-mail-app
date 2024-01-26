import EditNoteIcon from '@mui/icons-material/EditNote';
import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '.';

const meta = {
  title: 'Atoms/IconButton/Base',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseNormal: Story = {
  args: {
    icon: <EditNoteIcon />,
    clickHandler: action('clicked'),
    label: 'Test',
  },
};
export const BaseDisable: Story = {
  args: {
    icon: <EditNoteIcon />,
    clickHandler: action('clicked'),
    label: 'Test',
    disabled: true,
  },
};
