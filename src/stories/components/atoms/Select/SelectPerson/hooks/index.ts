import { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';

import {
  InitChangeEventStateContext,
  ResetSendStateContext,
  SetPersonDataContext,
  SetUserDataContext,
} from '@/stories/common/context';
import { getParsonDataFromId } from '@/stories/common/functions';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } =
    useContext(InitChangeEventStateContext) ?? {};
  const { sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};

  const handleChange = (event: SelectChangeEvent<unknown>) => {
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
    if (!initialChangeOccurred && setInitialChangeOccurred) {
      setInitialChangeOccurred(true);
    }
    if (sendStateDispatch) sendStateDispatch('INIT');
  };

  return { handleChange };
};
