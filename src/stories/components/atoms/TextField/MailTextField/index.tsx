import { FC } from 'react';

import { TextField as BasicTextField } from '../Basic';
import { TextFieldProps } from '../Basic/types';

export const MailTextField: FC<TextFieldProps> = ({
  inputHandler,
  disabledFlg,
  resetTextValue,
  value,
}: TextFieldProps) => {
  const inputProps = disabledFlg
    ? { type: 'email', required: false, disabled: true }
    : { type: 'email', required: true, disabled: false };
  return (
    <BasicTextField
      label='Email'
      inputHandler={inputHandler}
      inputProps={inputProps}
      disabledFlg={disabledFlg}
      resetTextValue={resetTextValue}
      value={value}
      requiredFlg={true}
    />
  );
};
