import {
  useInitChangeEventStore,
  useMessageStore,
  useSendStateStore,
} from '@/stories/common/stores';

export const useMessageFieldFunctions = () => {
  const { resetTextValue, setSendState } = useSendStateStore((state) => ({
    resetTextValue: state.resetTextValue,
    setSendState: state.setSendState,
  }));
  const { initialInputOccurred, setInitialInputOccurred } = useInitChangeEventStore(
    (state) => ({
      initialInputOccurred: state.initialInputOccurred,
      setInitialInputOccurred: state.setInitialInputOccurred,
    }),
  );
  const { setMessage } = useMessageStore((state) => ({ setMessage: state.setMessage }));

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
