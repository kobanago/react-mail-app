import { FormControlProps } from '@mui/material';
import { FC } from 'react';

import { FormControl as BaseFormControl } from '../Base';

import theme from '@/stories/common/theme';

export const FormControl: FC<FormControlProps> = ({ children }: FormControlProps) => {
  return (
    <BaseFormControl sx={{ width: '70%', padding: theme.spacing(1) }} margin='normal'>
      {children}
    </BaseFormControl>
  );
};
