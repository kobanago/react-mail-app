import { useReducer } from 'react';

import { MessageForms } from '../../Forms/MessageForms';
import { LogsMainParts } from '../LogsMainParts';

import { ResetSendStateContext } from '@/stories/common/context';
import { resetSendStateFunc } from '@/stories/common/reducers';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { LogoutDefaultFlex } from '@/stories/components/molecules/Button/LogoutDefaultFlex';

export const SendMainParts = () => {
  const [state, sendStateDispatch] = useReducer(resetSendStateFunc, {
    sendState: 0,
    resetTextValue: undefined,
  });

  return (
    <ResetSendStateContext.Provider
      value={{
        sendState: state.sendState,
        resetTextValue: state.resetTextValue,
        sendStateDispatch,
      }}
    >
      <Box>
        <MessageForms />
        <LogsMainParts />
        <LogoutDefaultFlex />
      </Box>
    </ResetSendStateContext.Provider>
  );
};
