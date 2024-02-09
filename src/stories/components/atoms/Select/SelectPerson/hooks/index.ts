import { SelectChangeEvent } from '@mui/material';
import { useContext } from 'react';

import {
  InitChangeEventStateContext,
  ResetSendStateContext,
  SelectedPersonIdContext,
} from '@/stories/common/context';

export const useSelectPersonEvent = () => {
  const { initialChangeOccurred, setInitialChangeOccurred } =
    useContext(InitChangeEventStateContext) ?? {};
  const { sendState, dispatch } = useContext(ResetSendStateContext) ?? {};
  const selectedPersonId = useContext(SelectedPersonIdContext);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (selectedPersonId) {
      selectedPersonId(event.target.value as string);
    }
    if (!initialChangeOccurred && setInitialChangeOccurred) {
      setInitialChangeOccurred(true);
    }
    if (sendState === 2 && dispatch) {
      dispatch('INIT');
    }
  };

  return { handleChange };
};
