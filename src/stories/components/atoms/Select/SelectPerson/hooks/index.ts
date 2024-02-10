import { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';

import { getTargetData } from '@/controllers';
import {
  InitChangeEventStateContext,
  ResetSendStateContext,
  SetPersonDataContext,
  SetUserDataContext,
} from '@/stories/common/context';
import { createPersonData } from '@/stories/common/functions';
import { OriginalUserDataType } from '@/stories/common/types';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } =
    useContext(InitChangeEventStateContext) ?? {};
  const { sendState, sendStateDispatch } = useContext(ResetSendStateContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (personDataDispatch) {
      getTargetData('users', 'id', event.target.value as string)
        .then((result) => {
          if (!result) throw new Error('something wrong');
          const data = result as OriginalUserDataType[];
          if (!data.length || !userData) throw new Error('something wrong');
          createPersonData(userData.id, data[0].mail, data[0]).then((newData) => {
            if (!newData) throw new Error('something wrong');
            personDataDispatch({ type: 'SUCCESS', payload: newData });
          });
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
