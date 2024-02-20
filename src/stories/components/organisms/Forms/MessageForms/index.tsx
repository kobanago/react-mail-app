import { useContext, useEffect, useReducer } from 'react';

import { useMessageFormsFunctions } from './hooks';

import { insertData } from '@/controllers';
import {
  ResetSendStateContext,
  SetMessageContext,
  ValidateResultContext,
} from '@/stories/common/context';
import { useInitChangeEventStore } from '@/stories/common/stores';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { SendStateButton } from '@/stories/components/molecules/Button/SendStateButton';
import { MessageForm } from '@/stories/components/molecules/Form/MessageForm';

export const MessageForms = () => {
  const [validateError, setValidateError] = useReducer(
    (state: boolean, action: boolean) => (action !== undefined ? action : state),
    false,
  );
  const { initialChangeOccurred, initialInputOccurred } = useInitChangeEventStore(
    (state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      initialInputOccurred: state.initialInputOccurred,
    }),
  );
  const { sendState, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const disableFlg = validateError
    ? validateError
    : !(initialChangeOccurred && initialInputOccurred);
  const [message, messageDispatch] = useReducer(
    (state: string, action: string) => (action !== undefined ? action : state),
    '',
  );
  const { messageUserData, messagePersonData } = useMessageFormsFunctions(
    Number(sendState),
    message,
  );

  useEffect(() => {}, [sendState]);

  const handleClickSendMessage = () => {
    if (sendState === 1 && messageUserData) {
      insertData('message_list', messageUserData)
        .then(() => {
          if (!messagePersonData) {
            if (sendStateDispatch) sendStateDispatch('COMPLETED');
            return;
          }
          insertData('message_list', messagePersonData).then(() => {
            if (sendStateDispatch) sendStateDispatch('COMPLETED');
          });
        })
        .catch((error: Error) => {
          alert('error occured!');
          console.error('Error Update data:', error);
        });
    }
  };

  return (
    <ValidateResultContext.Provider value={{ validateError, setValidateError }}>
      <SetMessageContext.Provider value={{ message, messageDispatch }}>
        <Box>
          <MessageForm />
          <SendStateButton
            keepHandler={() => sendStateDispatch && sendStateDispatch('KEEP')}
            sendHandler={handleClickSendMessage}
            disabled={disableFlg}
          />
        </Box>
      </SetMessageContext.Provider>
    </ValidateResultContext.Provider>
  );
};
