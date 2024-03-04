import { expect, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

import { PersonForm } from '.';

import { createDecorator } from '@/stories/common/decorators';

const meta = {
  title: 'Molecules/Form/PersonForm',
  component: PersonForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PersonForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const { createCommonDecorator } = createDecorator();
export const PersonFormNoData: Story = {
  decorators: createCommonDecorator('not exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const name = canvas.getByText('Name');
    const email = canvas.getByText('Email');
    const add = canvas.getByText('add');
    const edit = canvas.getByText('edit');
    const remove = canvas.getByText('remove');
    //Then
    await expect(name).toBeDisabled();
    await expect(email).toBeDisabled();
    await expect(add).toBeEnabled();
    await expect(edit).toBeDisabled();
    await expect(remove).toBeDisabled();
  },
};
export const PersonFormExistData: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameExistData = canvas.getByText('Name');
    const emailExistData = canvas.getByText('Email');
    const buttonExistData = canvas.getAllByRole('button');
    //Then
    await expect(nameExistData).toBeDisabled();
    await expect(emailExistData).toBeDisabled();
    await expect(buttonExistData).toBeEnabled();
  },
};
export const PersonFormExistDataAddClick: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameExistDataAddClick = canvas.getByText('Name');
    const emailExistDataAddClick = canvas.getByText('Email');
    const addExistDataAddClick = canvas.getByText('add');
    const editExistDataAddClick = canvas.getByText('edit');
    const removeExistDataAddClick = canvas.getByText('remove');
    // When
    userEvent.click(addExistDataAddClick);
    // Then
    await expect(nameExistDataAddClick).toBeEnabled();
    await expect(emailExistDataAddClick).toBeEnabled();
    await expect(editExistDataAddClick).toBeDisabled();
    await expect(removeExistDataAddClick).toBeDisabled();
    const inputTextExistDataAddClick = await canvas.findByText(/Input/);
    await expect(inputTextExistDataAddClick).toBeInTheDocument();
  },
};
export const PersonFormExistDataEditClick: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameExistDataEditClick = canvas.getByText('Name');
    const emailExistDataEditClick = canvas.getByText('Email');
    const addExistDataEditClick = canvas.getByText('add');
    const editExistDataEditClick = canvas.getByText('edit');
    const removeExistDataEditClick = canvas.getByText('remove');
    // When
    userEvent.click(editExistDataEditClick);
    // Then
    await expect(nameExistDataEditClick).toBeEnabled();
    await expect(emailExistDataEditClick).toBeDisabled();
    await expect(addExistDataEditClick).toBeDisabled();
    await expect(removeExistDataEditClick).toBeDisabled();
    const inputTextExistDataEditClick = await canvas.findByText('Select Person');
    await expect(inputTextExistDataEditClick).toBeInTheDocument();
  },
};
export const PersonFormExistDataRemoveClick: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameExistDataRemoveClick = canvas.getByText('Name');
    const emailExistDataRemoveClick = canvas.getByText('Email');
    const addExistDataRemoveClick = canvas.getByText('add');
    const editExistDataRemoveClick = canvas.getByText('edit');
    const removeExistDataRemoveClick = canvas.getByText('remove');
    // When
    userEvent.click(removeExistDataRemoveClick);
    // Then
    await expect(nameExistDataRemoveClick).toBeDisabled();
    await expect(emailExistDataRemoveClick).toBeDisabled();
    await expect(editExistDataRemoveClick).toBeDisabled();
    await expect(addExistDataRemoveClick).toBeDisabled();
    const inputTextExistDataRemoveClick = await canvas.findByText('Select Person');
    await expect(inputTextExistDataRemoveClick).toBeInTheDocument();
  },
};
export const PersonFormExistDataClearClickAddCase: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameClearClickAddCase = canvas.getByText('Name');
    const emailClearClickAddCase = canvas.getByText('Email');
    const addClearClickAddCase = canvas.getByText('add');
    const clearClearClickAddCase = canvas.getByText(/clear/);
    // When
    await userEvent.click(addClearClickAddCase);
    await userEvent.type(nameClearClickAddCase, 'name');
    await userEvent.type(emailClearClickAddCase, 'email');
    await userEvent.click(clearClearClickAddCase);
    // Then
    await expect(nameClearClickAddCase).not.toHaveValue();
    await expect(emailClearClickAddCase).not.toHaveValue();
    await expect(addClearClickAddCase).toBeDisabled();
  },
};
export const PersonFormExistDataClearClickEditCase: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameClearClickEditCase = canvas.getByText('Name');
    const editClearClickEditCase = canvas.getByText('edit');
    const clearClearClickEditCase = canvas.getByText(/clear/);
    // When
    await userEvent.click(editClearClickEditCase);
    await userEvent.type(nameClearClickEditCase, 'name');
    await userEvent.click(clearClearClickEditCase);
    // Then
    await expect(nameClearClickEditCase).not.toHaveValue();
    await expect(editClearClickEditCase).toBeDisabled();
  },
};
export const PersonFormExistDataCancelClickAddCase: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameCancelClickAddCase = canvas.getByText('Name');
    const emailCancelClickAddCase = canvas.getByText('Email');
    const addCancelClickAddCase = canvas.getByText('add');
    const cancelCancelClickAddCase = canvas.getByText(/cancel/);
    const buttonsCancelClickAddCase = canvas.getAllByRole('button');
    // When
    await userEvent.click(addCancelClickAddCase);
    await userEvent.type(nameCancelClickAddCase, 'name');
    await userEvent.type(emailCancelClickAddCase, 'email');
    await userEvent.click(cancelCancelClickAddCase);
    // Then
    await expect(nameCancelClickAddCase).not.toHaveValue();
    await expect(emailCancelClickAddCase).not.toHaveValue();
    buttonsCancelClickAddCase.forEach((button) => {
      expect(button).toBeEnabled();
    });
  },
};
export const PersonFormExistDataCancelClickRemoveCase: Story = {
  decorators: createCommonDecorator('exist data'),
  play: async ({ canvasElement }) => {
    // Given
    const canvas = within(canvasElement);
    const nameCancelClickRemoveCase = canvas.getByText('Name');
    const removeCancelClickRemoveCase = canvas.getByText('remove');
    const cancelCancelClickRemoveCase = canvas.getByText(/cancel/);
    const buttonsCancelClickRemoveCase = canvas.getAllByRole('button');
    // When
    await userEvent.click(removeCancelClickRemoveCase);
    await userEvent.type(nameCancelClickRemoveCase, 'name');
    await userEvent.click(cancelCancelClickRemoveCase);
    // Then
    await expect(nameCancelClickRemoveCase).not.toHaveValue();
    buttonsCancelClickRemoveCase.forEach((button) => {
      expect(button).toBeEnabled();
    });
  },
};
