import { useShallow } from 'zustand/react/shallow';

import {
  useInitChangeEventStore,
  useMessageStore,
  useSendStateStore,
} from '@/stories/common/stores';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, setSendState } = useSendStateStore(
    useShallow((state) => ({
      resetTextValue: state.resetTextValue,
      setSendState: state.setSendState,
    })),
  );
  const { initialInputOccurred, setInitialInputOccurred } = useInitChangeEventStore(
    useShallow((state) => ({
      initialInputOccurred: state.initialInputOccurred,
      setInitialInputOccurred: state.setInitialInputOccurred,
    })),
  );
  const { setMessage } = useMessageStore(
    useShallow((state) => ({ setMessage: state.setMessage })),
  );

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setSendState('INIT');
    if (!initialInputOccurred) setInitialInputOccurred(true);
  };

  return {
    handleChangeMessage,
    resetTextValue,
  };
};
