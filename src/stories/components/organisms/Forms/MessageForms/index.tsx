import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useMessageFormsFunctions } from './hooks';

import { insertData } from '@/controllers';
import {
  useInitChangeEventStore,
  useMessageStore,
  useSendStateStore,
  useValidateResultStore,
} from '@/stories/common/stores';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { SendStateButton } from '@/stories/components/molecules/Button/SendStateButton';
import { MessageForm } from '@/stories/components/molecules/Form/MessageForm';

export const MessageForms = () => {
  const { validateError } = useValidateResultStore(
    useShallow((state) => ({
      validateError: state.validateError,
    })),
  );
  const { initialChangeOccurred, initialInputOccurred } = useInitChangeEventStore(
    useShallow((state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      initialInputOccurred: state.initialInputOccurred,
    })),
  );
  const { sendState, setSendState } = useSendStateStore(
    useShallow((state) => ({
      sendState: state.sendState,
      setSendState: state.setSendState,
    })),
  );

  const disableFlg = validateError
    ? validateError
    : !(initialChangeOccurred && initialInputOccurred);
  const { message } = useMessageStore(
    useShallow((state) => ({ message: state.message })),
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
            setSendState('COMPLETED');
            return;
          }
          insertData('message_list', messagePersonData).then(() => {
            setSendState('COMPLETED');
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
        keepHandler={() => setSendState('KEEP')}
        sendHandler={handleClickSendMessage}
        disabled={disableFlg}
      />
    </Box>
  );
};
