import React from 'react';

import { Box } from '@/stories/components/atoms/Box/Basic';
import { SelectPerson } from '@/stories/components/atoms/Select/SelectPerson';
import { MessageTextField } from '@/stories/components/atoms/TextField/MessageField';

export const MessageForm = React.memo(function messageForm() {
  return (
    <Box>
      <SelectPerson />
      <MessageTextField />
    </Box>
  );
});
