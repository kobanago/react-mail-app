import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from '@mui/material';
import { ChangeEventHandler, FC } from 'react';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'onChange'> {
  inputHandler?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabledFlg?: boolean;
}
export const TextField: FC<TextFieldProps> = ({
  inputHandler,
  disabledFlg,
  ...props
}: TextFieldProps) => {
  return disabledFlg ? (
    <MuiTextField {...props} onChange={inputHandler} disabled>
      {props.children}
    </MuiTextField>
  ) : (
    <MuiTextField {...props} onChange={inputHandler} required>
      {props.children}
    </MuiTextField>
  );
};
