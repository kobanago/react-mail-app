import { useReducer, useState } from 'react';

import {
  InitChangeEventStateContext,
  InitInputEventStateContext,
  ResetSendStateContext,
  ValidateResultContext,
} from '@/stories/common/context';
import { resetSendStateFunc } from '@/stories/common/reducers';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { SendStateButton } from '@/stories/components/molecules/Button/SendStateButton';
import { MessageForm } from '@/stories/components/molecules/Form/MessageForm';

export const MessageForms = () => {
  const [inputError, setInputError] = useState(false);
  const handleChangeInputError = (newState: boolean) => {
    setInputError(newState);
  };
  const [initialChangeOccurred, setInitialChangeOccurred] = useState(false);
  const [initialInputOccurred, setInitialInputOccurred] = useState(false);
  const [state, sendStateDispatch] = useReducer(resetSendStateFunc, {
    sendState: 0,
    resetTextValue: undefined,
  });
  const disableFlg = inputError
    ? inputError
    : !(initialChangeOccurred && initialInputOccurred);
  const handleClickSendMessage = () => {
    sendStateDispatch('COMPLETED');
  };

  return (
    <ValidateResultContext.Provider value={handleChangeInputError}>
      <InitChangeEventStateContext.Provider
        value={{ initialChangeOccurred, setInitialChangeOccurred }}
      >
        <InitInputEventStateContext.Provider
          value={{ initialInputOccurred, setInitialInputOccurred }}
        >
          <ResetSendStateContext.Provider
            value={{
              sendState: state.sendState,
              resetTextValue: state.resetTextValue,
              sendStateDispatch,
            }}
          >
            <Box>
              <MessageForm />
              <SendStateButton
                keepHandler={() => sendStateDispatch('KEEP')}
                sendHandler={handleClickSendMessage}
                disabled={disableFlg}
              />
            </Box>
          </ResetSendStateContext.Provider>
        </InitInputEventStateContext.Provider>
      </InitChangeEventStateContext.Provider>
    </ValidateResultContext.Provider>
  );
};
