import { useContext } from 'react';

import { ResetSendStateContext } from '@/stories/common/context';
import { useInitChangeEventStore, useMessageStore } from '@/stories/common/stores';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { initialInputOccurred, setInitialInputOccurred } = useInitChangeEventStore(
    (state) => ({
      initialInputOccurred: state.initialInputOccurred,
      setInitialInputOccurred: state.setInitialInputOccurred,
    }),
  );
  const { setMessage } = useMessageStore((state) => ({ setMessage: state.setMessage }));

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    if (sendStateDispatch) sendStateDispatch('INIT');
    if (!initialInputOccurred) setInitialInputOccurred(true);
  };

  return {
    handleChangeMessage,
    resetTextValue,
  };
};
