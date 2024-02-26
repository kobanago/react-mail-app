import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import {
  useFormClearFlgStore,
  useLinkClickFlgStore,
  usePersonDataStore,
  useProcessFlgStore,
  useValidateResultStore,
} from '@/stories/common/stores';
import { UserDataType } from '@/stories/common/types/db';

export const useFormFunctions = () => {
  const [personName, setPersonName] = useState('');
  const [personMail, setPersonMail] = useState('');
  const [abortNameFlg, setAbortNameFlg] = useState(true);
  const [abortMailFlg, setAbortMailFlg] = useState(true);
  const initialOperationMessage = 'Select Operation Button';
  const [operationMessage, setOperationMessage] = useState(initialOperationMessage);
  const { personData } = usePersonDataStore(
    useShallow((state) => ({
      personData: state.personData,
    })),
  );
  const { setProcessFlg } = useProcessFlgStore(
    useShallow((state) => ({
      setProcessFlg: state.setProcessFlg,
    })),
  );
  const { listClickFlg, setListClickFlg } = useLinkClickFlgStore(
    useShallow((state) => ({
      listClickFlg: state.listClickFlg,
      setListClickFlg: state.setListClickFlg,
    })),
  );
  const { formClearFlg, setFormClearFlg } = useFormClearFlgStore(
    useShallow((state) => ({
      formClearFlg: state.formClearFlg,
      setFormClearFlg: state.setFormClearFlg,
    })),
  );
  const { setValidateError } = useValidateResultStore(
    useShallow((state) => ({
      setValidateError: state.setValidateError,
    })),
  );

  const inputNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonName(event.target.value);
    if (formClearFlg) setFormClearFlg(false);
    setListClickFlg(false);
  };

  const inputMailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonMail(event.target.value);
    if (formClearFlg) setFormClearFlg(false);
    setListClickFlg(false);
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
      setProcessFlg({ type: stateType, payload: value });
    },
    [setProcessFlg],
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
    setFormClearFlg(true);
    setListClickFlg(false);
    setPersonName('');
    setPersonMail('');
  }, [setFormClearFlg]);

  const cancelClickHandler = useCallback(() => {
    clearClickHandler();
    switchProcessFlg('ADD', false);
    switchProcessFlg('EDIT', false);
    switchProcessFlg('REMOVE', false);
    setValidateError(false);
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
