import { FC } from 'react';

import { useMessageFieldFunctions } from './hooks';
import { TextFieldProps } from '../Base';
import { TextField as BasicTextField } from '../Basic';

export const MessageTextField: FC<TextFieldProps> = ({ disabledFlg }: TextFieldProps) => {
  const { handleChangeMessage, resetTextValue } = useMessageFieldFunctions();

  return (
    <BasicTextField
      label='Message'
      inputHandler={handleChangeMessage}
      disabledFlg={disabledFlg}
      resetTextValue={resetTextValue}
    />
  );
};
