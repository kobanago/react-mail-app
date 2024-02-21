import { SelectChangeEvent } from '@mui/material';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';

import {
  useUserDataStore,
  useInitChangeEventStore,
  usePersonDataStore,
  useSendStateStore,
} from '@/stories/common/stores';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } = useInitChangeEventStore(
    useShallow((state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      setInitialChangeOccurred: state.setInitialChangeOccurred,
    })),
  );
  const { setSendState } = useSendStateStore(
    useShallow((state) => ({
      setSendState: state.setSendState,
    })),
  );

  const { setPersonData } = usePersonDataStore(
    useShallow((state) => ({
      setPersonData: state.setPersonData,
    })),
  );
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );

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
