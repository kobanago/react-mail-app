import { useState } from 'react';

export const useFormFunctions = () => {
  const [personName, setPersonName] = useState('');
  const [personMail, setPersonMail] = useState('');
  const [addProcessingFlg, setAddProcessingFlg] = useState(false);
  const [editProcessingFlg, setEditProcessingFlg] = useState(false);
  const [removeProcessingFlg, setRemoveProcessingFlg] = useState(false);
  const [abortNameFlg, setAbortNameFlg] = useState(true);
  const [abortMailFlg, setAbortMailFlg] = useState(true);

  const inputNameHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(evt.target.value);
  };

  const inputMailHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPersonMail(evt.target.value);
  };

  const clearClickHandler = () => {
    setPersonName('');
    setPersonMail('');
  };

  const cancelClickHandler = () => {
    clearClickHandler();
    setAddProcessingFlg(false);
    setEditProcessingFlg(false);
    setRemoveProcessingFlg(false);
    setAbortNameFlg(true);
    setAbortMailFlg(true);
  };

  const switchProcessFlg = (state: string) => {
    switch (state) {
      case 'ADD':
        setAddProcessingFlg(true);
        setAbortNameFlg(false);
        setAbortMailFlg(false);
        break;
      case 'EDIT':
        setEditProcessingFlg(true);
        setAbortNameFlg(false);
        break;
      case 'REMOVE':
        setRemoveProcessingFlg(true);
        break;
      default:
        break;
    }
  };

  return {
    personName,
    personMail,
    addProcessingFlg,
    editProcessingFlg,
    removeProcessingFlg,
    abortNameFlg,
    abortMailFlg,
    inputNameHandler,
    inputMailHandler,
    clearClickHandler,
    cancelClickHandler,
    switchProcessFlg,
  };
};
