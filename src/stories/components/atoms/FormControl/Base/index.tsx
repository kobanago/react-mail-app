import { FormControlProps, FormControl as MuiFormControl } from '@mui/material';
import { FC } from 'react';

export const FormControl: FC<FormControlProps> = ({ ...props }: FormControlProps) => (
  <MuiFormControl {...props}>{props.children}</MuiFormControl>
);
