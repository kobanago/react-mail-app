import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { ChangeEventHandler } from 'react';

export type TextFieldProps = Omit<MuiTextFieldProps, 'onChange'> & {
  inputHandler?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabledFlg?: boolean;
  requiredFlg?: boolean;
  value?: string;
};
