import { InputLabel } from '@mui/material';

import { useSelectPersonEvent } from './hooks';
import { FormControl } from '../../FormControl/Basic';
import { Select } from '../Basic';

export const SelectPerson = () => {
  const { handleChange } = useSelectPersonEvent();
  return (
    <FormControl>
      <InputLabel id='select-label'>To</InputLabel>
      <Select selectHandler={handleChange} labelId='select-label' />
    </FormControl>
  );
};
