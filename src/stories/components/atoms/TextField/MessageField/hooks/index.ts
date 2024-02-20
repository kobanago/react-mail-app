import { useContext } from 'react';

import { ResetSendStateContext, SetMessageContext } from '@/stories/common/context';
import { useInitChangeEventStore } from '@/stories/common/stores';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { initialInputOccurred, setInitialInputOccurred } = useInitChangeEventStore(
    (state) => ({
      initialInputOccurred: state.initialInputOccurred,
      setInitialInputOccurred: state.setInitialInputOccurred,
    }),
  );
  const { messageDispatch } = useContext(SetMessageContext) ?? {};

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (messageDispatch) {
      messageDispatch(event.target.value);
    }
    if (sendStateDispatch) sendStateDispatch('INIT');
    if (!initialInputOccurred) setInitialInputOccurred(true);
  };

  return {
    handleChangeMessage,
    resetTextValue,
  };
};
