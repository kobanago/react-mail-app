import { SelectChangeEvent } from '@mui/material';
import { useCallback, useContext } from 'react';

import { ResetSendStateContext, SetPersonDataContext } from '@/stories/common/context';
import { setDataToCreateParsonData } from '@/stories/common/functions';
import { useUserDataStore, useInitChangeEventStore } from '@/stories/common/stores';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } = useInitChangeEventStore(
    (state) => ({
      initialChangeOccurred: state.initialChangeOccurred,
      setInitialChangeOccurred: state.setInitialChangeOccurred,
    }),
  );
  const { sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useUserDataStore((state) => ({ userData: state.userData }));

  const handleChange = useCallback((event: SelectChangeEvent<unknown>) => {
    if (personDataDispatch) {
      setDataToCreateParsonData(event.target.value as string, userData, undefined)
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
