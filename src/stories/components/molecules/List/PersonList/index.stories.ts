import type { Meta, StoryObj } from '@storybook/react';

import { PersonList } from '.';

import { createLoginMainPartsDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Molecules/List/PersonList',
  component: PersonList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonListNoData: Story = {
  decorators: [createLoginMainPartsDecorator('not exist data')],
};
export const PersonListExistData: Story = {
  decorators: [createLoginMainPartsDecorator('exist data')],
};
