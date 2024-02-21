import { useContext, useEffect } from 'react';

import { useMessageFormsFunctions } from './hooks';

import { insertData } from '@/controllers';
import { ResetSendStateContext } from '@/stories/common/context';
import {
  useInitChangeEventStore,
  useMessageStore,
  useValidateResultStore,
} from '@/stories/common/stores';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { SendStateButton } from '@/stories/components/molecules/Button/SendStateButton';
import { MessageForm } from '@/stories/components/molecules/Form/MessageForm';

export const MessageForms = () => {
  const { validateError } = useValidateResultStore((state) => ({
    validateError: state.validateError,
  }));
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
  const { message } = useMessageStore((state) => ({ message: state.message }));
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
    <Box>
      <MessageForm />
      <SendStateButton
        keepHandler={() => sendStateDispatch && sendStateDispatch('KEEP')}
        sendHandler={handleClickSendMessage}
        disabled={disableFlg}
      />
    </Box>
  );
};
