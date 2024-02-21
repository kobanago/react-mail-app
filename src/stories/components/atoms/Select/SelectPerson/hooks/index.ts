import { SelectChangeEvent } from '@mui/material';
import { useCallback } from 'react';

import {
  useUserDataStore,
  useInitChangeEventStore,
  usePersonDataStore,
  useSendStateStore,
} from '@/stories/common/stores';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } = useInitChangeEventStore(
    (state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      setInitialChangeOccurred: state.setInitialChangeOccurred,
    }),
  );
  const { setSendState } = useSendStateStore((state) => ({
    setSendState: state.setSendState,
  }));

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
        setSendState('INIT');
      })
      .catch((error) => console.error(error));
  }, []);

  return { handleChange };
};
