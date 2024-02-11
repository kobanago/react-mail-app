import { TextField as MuiTextField } from '@mui/material';
import { FC } from 'react';

import { TextFieldProps } from './types';

export const TextField: FC<TextFieldProps> = ({
  inputHandler,
  disabledFlg,
  value,
  requiredFlg,
  ...props
}: TextFieldProps) => {
  return disabledFlg ? (
    <MuiTextField {...props} onChange={inputHandler} value={value} disabled>
      {props.children}
    </MuiTextField>
  ) : (
    <MuiTextField {...props} onChange={inputHandler} value={value} required={requiredFlg}>
      {props.children}
    </MuiTextField>
  );
};
