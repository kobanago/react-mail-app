import { FC } from 'react';

import { TextFieldProps } from '../Base';
import { TextField as BasicTextField } from '../Basic';

export const MailTextField: FC<TextFieldProps> = ({
  inputHandler,
  label,
  disabledFlg,
}: TextFieldProps) => {
  const inputProps = disabledFlg
    ? { type: 'email', required: false, disabled: true }
    : { type: 'email', required: true, disabled: false };
  return (
    <BasicTextField
      label={label}
      inputHandler={inputHandler}
      inputProps={inputProps}
      disabledFlg={disabledFlg}
    />
  );
};
