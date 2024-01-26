import { FC } from 'react';

import { TextFieldProps } from '../Base';
import { TextField as BasicTextField } from '../Basic';

export const MailTextField: FC<TextFieldProps> = ({
  inputHandler,
  label,
  disabledFlg,
  value,
}: TextFieldProps) => {
  const inputProps = disabledFlg
    ? { type: 'email', disabled: true }
    : { type: 'email', required: true };
  return (
    <BasicTextField
      label={label}
      inputHandler={inputHandler}
      inputProps={inputProps}
      disabledFlg={disabledFlg}
      value={value}
    />
  );
};
