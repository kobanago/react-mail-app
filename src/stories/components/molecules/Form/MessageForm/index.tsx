import { FC } from 'react';

import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { ButtonProps } from '@/stories/components/atoms/Button/Base';
import { SelectPerson } from '@/stories/components/atoms/Select/SelectPerson';
import { TextFieldProps } from '@/stories/components/atoms/TextField/Base';
import { MessageTextField } from '@/stories/components/atoms/TextField/MessageField';

export type MessageFormType = TextFieldProps &
  ButtonProps & {
    data: AddressListType;
  };

export const MessageForm: FC<MessageFormType> = ({ data }: MessageFormType) => {
  return (
    <Box>
      <SelectPerson data={data} />
      <MessageTextField />
    </Box>
  );
};
