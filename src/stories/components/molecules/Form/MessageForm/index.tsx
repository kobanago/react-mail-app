import { FC, useState } from 'react';

import { AddressListType } from '@/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { ButtonProps } from '@/stories/components/atoms/Button/Base';
import { SelectPerson } from '@/stories/components/atoms/Select/SelectPerson';
import { TextFieldProps } from '@/stories/components/atoms/TextField/Base';
import { TextField } from '@/stories/components/atoms/TextField/Basic';

export type MessageFormType = TextFieldProps &
  ButtonProps & {
    data: AddressListType;
  };

export const MessageForm: FC<MessageFormType> = ({ data }: MessageFormType) => {
  const [message, setMessage] = useState('');
  const handleChangeMessage = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(evt.target.value);
  };

  return (
    <Box>
      <SelectPerson data={data} />
      <TextField label={'Message'} inputHandler={handleChangeMessage} value={message} />
    </Box>
  );
};
