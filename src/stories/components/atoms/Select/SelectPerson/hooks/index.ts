import { SelectChangeEvent } from '@mui/material';
import { useCallback, useContext } from 'react';

import {
  ResetSendStateContext,
  SetPersonDataContext,
  SetUserDataContext,
} from '@/stories/common/context';
import { getParsonDataFromId } from '@/stories/common/functions';
import { useInitChangeEventStore } from '@/stories/common/stores';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } = useInitChangeEventStore(
    (state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      setInitialChangeOccurred: state.setInitialChangeOccurred,
    }),
  );
  const { sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};

  const handleChange = useCallback((event: SelectChangeEvent<unknown>) => {
    if (personDataDispatch) {
      getParsonDataFromId(event.target.value as string, userData)
        .then((result) => {
          if (!result) throw new Error('something wrong');
          personDataDispatch({ type: 'SUCCESS', payload: result });
        })
        .catch((error) => {
          console.error(error);
          personDataDispatch({ type: 'ERROR', payload: undefined });
        });
    }
    if (!initialChangeOccurred) setInitialChangeOccurred(true);
    if (sendStateDispatch) sendStateDispatch('INIT');
  }, []);

  return { handleChange };
};
