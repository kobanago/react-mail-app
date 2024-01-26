import { InputLabel } from '@mui/material';
import { FC } from 'react';

import { useSelectPersonEvent } from './hooks';
import { FormControl } from '../../FormControl/Basic';
import { SelectProps } from '../Base';
import { Select } from '../Basic';

export const SelectPerson: FC<SelectProps> = ({ data }: SelectProps) => {
  const { handleChange } = useSelectPersonEvent();
  return (
    <FormControl>
      <InputLabel id='select-label'>To</InputLabel>
      <Select selectHandler={handleChange} data={data} labelId='select-label' />
    </FormControl>
  );
};
