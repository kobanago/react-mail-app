import type { Meta, StoryObj } from '@storybook/react';

import { EditPersonMainParts } from '.';

const meta = {
  title: 'Organisms/Main/EditPersonMainParts',
  component: EditPersonMainParts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditPersonMainParts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditPersonMainPartsNormal: Story = {};
