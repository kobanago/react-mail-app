import { InputLabel, SelectChangeEvent } from '@mui/material';
import { FC, useContext } from 'react';

import { FormControl } from '../../FormControl/Basic';
import { SelectProps } from '../Base';
import { Select } from '../Basic';

import {
  InitChangeEventStateContext,
  ResetSendStateContext,
  SelectedPersonIdContext,
} from '@/stories/common/context';
// import { handleChange } from './functions';

export const SelectPerson: FC<SelectProps> = ({ data }: SelectProps) => {
  const { initialChangeOccurred, setInitialChangeOccurred } =
    useContext(InitChangeEventStateContext) ?? {};
  const { sendState, dispatch } = useContext(ResetSendStateContext) ?? {};
  const selectedPersonId = useContext(SelectedPersonIdContext);
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (selectedPersonId) {
      selectedPersonId(event.target.value as string);
    }
    if (!initialChangeOccurred && setInitialChangeOccurred) {
      setInitialChangeOccurred(true);
    }
    if (sendState === 2 && dispatch) {
      dispatch('INIT');
    }
  };

  return (
    <FormControl>
      <InputLabel id='select-label'>To</InputLabel>
      <Select selectHandler={handleChange} data={data} labelId='select-label' />
    </FormControl>
  );
};
