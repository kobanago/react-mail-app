import type { Meta, StoryObj } from '@storybook/react';

import { PersonList } from '.';

import { createDecorator } from '@/stories/common/decorators';

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

const { createCommonDecorator } = createDecorator();
export const PersonListNormal: Story = {
  decorators: createCommonDecorator('exist data'),
};
