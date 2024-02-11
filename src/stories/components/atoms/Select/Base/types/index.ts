import { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material';

export type SelectProps = Omit<MuiSelectProps, 'onChange'> & {
  selectHandler?: (event: SelectChangeEvent<unknown>) => void;
};
