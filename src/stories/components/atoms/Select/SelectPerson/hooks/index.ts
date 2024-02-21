import { SelectChangeEvent } from '@mui/material';
import { useCallback, useContext } from 'react';

import { ResetSendStateContext } from '@/stories/common/context';
import {
  useUserDataStore,
  useInitChangeEventStore,
  usePersonDataStore,
} from '@/stories/common/stores';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } = useInitChangeEventStore(
    (state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      setInitialChangeOccurred: state.setInitialChangeOccurred,
    }),
  );
  const { sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { setPersonData } = usePersonDataStore((state) => ({
    setPersonData: state.setPersonData,
  }));
  const { userData } = useUserDataStore((state) => ({ userData: state.userData }));

  const handleChange = useCallback((event: SelectChangeEvent<unknown>) => {
    setPersonData({
      personId: event.target.value as string,
      userData,
      personData: undefined,
    })
      .then(() => {
        if (!initialChangeOccurred) setInitialChangeOccurred(true);
        if (sendStateDispatch) sendStateDispatch('INIT');
      })
      .catch((error) => console.error(error));
  }, []);

  return { handleChange };
};
