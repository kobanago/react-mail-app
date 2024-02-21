import { MessageForms } from '../../Forms/MessageForms';
import { LogsMainParts } from '../LogsMainParts';

import { Box } from '@/stories/components/atoms/Box/Basic';
import { LogoutDefaultFlex } from '@/stories/components/molecules/Button/LogoutDefaultFlex';

export const SendMainParts = () => {
  return (
    <Box>
      <MessageForms />
      <LogsMainParts />
      <LogoutDefaultFlex />
    </Box>
  );
};
