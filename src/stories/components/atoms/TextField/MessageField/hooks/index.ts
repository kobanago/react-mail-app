import { useContext } from 'react';

import {
  ResetSendStateContext,
  InitInputEventStateContext,
} from '@/stories/common/context';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { initialInputOccurred, setInitialInputOccurred } =
    useContext(InitInputEventStateContext) ?? {};
  const handleChangeMessage = () => {
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
