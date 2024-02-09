import { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';

import { getTargetData } from '@/controllers';
import {
  InitChangeEventStateContext,
  ResetSendStateContext,
  SetPersonDataContext,
} from '@/stories/common/context';
import { UserDataType } from '@/stories/common/types';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } =
    useContext(InitChangeEventStateContext) ?? {};
  const { sendState, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (personDataDispatch) {
      getTargetData('users', 'id', event.target.value as string)
        .then((result) => {
          if (result) {
            const data = result as UserDataType[];
            personDataDispatch({ type: 'SUCCESS', payload: data[0] });
          }
        })
        .catch((error) => {
          console.error(error);
          personDataDispatch({ type: 'ERROR', payload: undefined });
        });
    }
    if (!initialChangeOccurred && setInitialChangeOccurred) {
      setInitialChangeOccurred(true);
    }
    if (sendState === 2 && sendStateDispatch) {
      sendStateDispatch('INIT');
    }
  };

  return { handleChange };
};
