import { FC, useReducer, useState } from 'react';

import {
  InitChangeEventStateContext,
  InitInputEventStateContext,
  ResetSendStateContext,
  ValidateResultContext,
} from '@/stories/common/context';
import { resetSendStateFunc } from '@/stories/common/reducers';
import { AddressListType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { SendStateButton } from '@/stories/components/molecules/Button/SendStateButton';
import { MessageForm } from '@/stories/components/molecules/Form/MessageForm';
export type MessgeFormsType = {
  data: AddressListType;
  authHandler: () => void;
};

export const MessageForms: FC<MessgeFormsType> = ({ data }: MessgeFormsType) => {
  const [inputError, setInputError] = useState(false);
  const handleChangeInputError = (newState: boolean) => {
    setInputError(newState);
  };
  const [initialChangeOccurred, setInitialChangeOccurred] = useState(false);
  const [initialInputOccurred, setInitialInputOccurred] = useState(false);
  const [state, dispatch] = useReducer(resetSendStateFunc, {
    sendState: 0,
    textValue: undefined,
  });
  const disableFlg = inputError
    ? inputError
    : !(initialChangeOccurred && initialInputOccurred);
  const handleClickSendMessage = () => {
    dispatch('COMPLETED');
  };

  return (
    <ValidateResultContext.Provider value={handleChangeInputError}>
      <InitChangeEventStateContext.Provider
        value={{ initialChangeOccurred, setInitialChangeOccurred }}
      >
        <InitInputEventStateContext.Provider
          value={{ initialInputOccurred, setInitialInputOccurred }}
        >
          <ResetSendStateContext.Provider
            value={{ sendState: state.sendState, textValue: state.textValue, dispatch }}
          >
            <Box>
              <MessageForm data={data} />
              <SendStateButton
                keepHandler={() => dispatch('KEEP')}
                sendHandler={handleClickSendMessage}
                disabled={disableFlg}
              />
            </Box>
          </ResetSendStateContext.Provider>
        </InitInputEventStateContext.Provider>
      </InitChangeEventStateContext.Provider>
    </ValidateResultContext.Provider>
  );
};
