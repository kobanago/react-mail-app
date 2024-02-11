import { ChangeEventHandler, useCallback, useContext, useEffect, useState } from 'react';

import {
  SetLinkClickFlgContext,
  SetPersonDataContext,
  SetProcessFlgContext,
} from '@/stories/common/context';
import { FormClearState } from '@/stories/common/reducers';
import { UserDataType } from '@/stories/common/types/db';

export const useFormFunctions = ({ clearFlg, dispatch }: FormClearState) => {
  const [personName, setPersonName] = useState('');
  const [personMail, setPersonMail] = useState('');
  const [abortNameFlg, setAbortNameFlg] = useState(true);
  const [abortMailFlg, setAbortMailFlg] = useState(true);
  const initialOperationMessage = 'Select Operation Button';
  const [operationMessage, setOperationMessage] = useState(initialOperationMessage);
  const { personData } = useContext(SetPersonDataContext) ?? {};
  const { processFlgDispatch } = useContext(SetProcessFlgContext) ?? {};
  const { listClickFlg, setListClickFlg } = useContext(SetLinkClickFlgContext) ?? {};

  const inputNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonName(event.target.value);
    if (clearFlg) dispatch(false);
    if (setListClickFlg) setListClickFlg(false);
  };

  const inputMailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonMail(event.target.value);
    if (clearFlg) dispatch(false);
    if (setListClickFlg) setListClickFlg(false);
  };

  useEffect(() => {
    if (!listClickFlg) return;
    const person = personData as UserDataType;
    const name = person.person_display_name ? person.person_display_name : person.name;
    inputNameHandler({
      target: { value: name },
    } as React.ChangeEvent<HTMLInputElement>);
    inputMailHandler({
      target: { value: person.mail },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [listClickFlg]);

  const changeProcessFlg = useCallback(
    (stateType: string, value: boolean) => {
      if (processFlgDispatch) {
        processFlgDispatch({ type: stateType, payload: value });
      }
    },
    [processFlgDispatch],
  );

  const switchProcessFlg = useCallback(
    (state: string, changeFlg: boolean) => {
      let message = changeFlg ? 'Select Person' : initialOperationMessage;
      changeProcessFlg(state, changeFlg);
      switch (state) {
        case 'ADD':
          setAbortNameFlg(!changeFlg);
          setAbortMailFlg(!changeFlg);
          message = changeFlg
            ? 'Input Name(option) And Mail(required)'
            : initialOperationMessage;
          break;
        case 'EDIT':
          setAbortNameFlg(!changeFlg);
          break;
        case 'REMOVE':
          break;
        default:
          break;
      }
      setOperationMessage(message);
    },
    [changeProcessFlg],
  );

  const clearClickHandler = useCallback(() => {
    dispatch(true);
    if (setListClickFlg) setListClickFlg(false);
  }, [dispatch]);

  const cancelClickHandler = useCallback(() => {
    clearClickHandler();
    switchProcessFlg('ADD', false);
    switchProcessFlg('EDIT', false);
    switchProcessFlg('REMOVE', false);
  }, [clearClickHandler, switchProcessFlg]);

  return {
    personName,
    personMail,
    abortNameFlg,
    abortMailFlg,
    operationMessage,
    inputNameHandler,
    inputMailHandler,
    clearClickHandler,
    cancelClickHandler,
    switchProcessFlg,
  };
};
