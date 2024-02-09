import { useContext } from 'react';

import {
  ResetSendStateContext,
  InitInputEventStateContext,
  SetMessageContext,
} from '@/stories/common/context';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { initialInputOccurred, setInitialInputOccurred } =
    useContext(InitInputEventStateContext) ?? {};
  const { messageDispatch } = useContext(SetMessageContext) ?? {};

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (messageDispatch) {
      messageDispatch(event.target.value);
    }
    if (sendStateDispatch) {
      sendStateDispatch('INIT');
    }
    if (!initialInputOccurred && setInitialInputOccurred) {
      setInitialInputOccurred(true);
    }
  };

  return {
    handleChangeMessage,
    resetTextValue,
  };
};
