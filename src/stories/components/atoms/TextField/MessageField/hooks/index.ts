import { useContext } from 'react';

import {
  ResetSendStateContext,
  InitInputEventStateContext,
} from '@/stories/common/context';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, dispatch } = useContext(ResetSendStateContext) ?? {};
  const { initialInputOccurred, setInitialInputOccurred } =
    useContext(InitInputEventStateContext) ?? {};
  const handleChangeMessage = () => {
    if (dispatch) {
      dispatch('INIT');
    }
    if (!initialInputOccurred && setInitialInputOccurred) {
      setInitialInputOccurred(true);
    }
  };

  return {
    handleChangeMessage,
    resetTextValue,
    // message
  };
};
