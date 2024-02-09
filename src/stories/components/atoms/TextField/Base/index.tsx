import {
  TextFieldProps as MuiTextFieldProps,
  TextField as MuiTextField,
} from '@mui/material';
import { ChangeEventHandler, FC } from 'react';

export type TextFieldProps = Omit<MuiTextFieldProps, 'onChange'> & {
  inputHandler?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabledFlg?: boolean;
  requiredFlg?: boolean;
  value?: string;
};
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
