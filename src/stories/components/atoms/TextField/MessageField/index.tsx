import { FC } from 'react';

import { useMessageFieldFunctions } from './hooks';
import { TextField as BasicTextField } from '../Basic';
import { TextFieldProps } from '../Basic/types';

export const MessageTextField: FC<TextFieldProps> = ({ disabledFlg }: TextFieldProps) => {
  const { handleChangeMessage, resetTextValue } = useMessageFieldFunctions();

  return (
    <BasicTextField
      label='Message'
      inputHandler={handleChangeMessage}
      disabledFlg={disabledFlg}
      resetTextValue={resetTextValue}
      requiredFlg={true}
    />
  );
};
