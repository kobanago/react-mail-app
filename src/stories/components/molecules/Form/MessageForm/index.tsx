import { Box } from '@/stories/components/atoms/Box/Basic';
import { SelectProps } from '@/stories/components/atoms/Select/Base';
import { SelectPerson } from '@/stories/components/atoms/Select/SelectPerson';
import { MessageTextField } from '@/stories/components/atoms/TextField/MessageField';

export type MessageFormType = SelectProps;

export const MessageForm = () => {
  return (
    <Box>
      <SelectPerson />
      <MessageTextField />
    </Box>
  );
};
