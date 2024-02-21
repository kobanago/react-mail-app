import { ChangeEventHandler, useEffect, useMemo, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TextFieldProps } from '../types';

import { useValidateResultStore } from '@/stories/common/stores';

export const useTextFieldFunctions = ({
  inputHandler,
  resetTextValue,
  value,
  requiredFlg,
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);
  const memoizedInputError = useMemo(() => inputError, [inputError]);
  const { validateError, setValidateError } = useValidateResultStore(
    useShallow((state) => ({
      validateError: state.validateError,
      setValidateError: state.setValidateError,
    })),
  );
  const [textValue, setTextValue] = useState('');

  const handleChangeInputText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTextValue(event.target.value);
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid || (requiredFlg && ref.value === '')) {
        setInputError(true);
      } else {
        setInputError(false);
      }
    }
    if (inputHandler) {
      inputHandler(event);
    }
  };

  useEffect(() => {
    if (!validateError) setInputError(false);
  }, [validateError]);

  useEffect(() => {
    if (value) setTextValue(value);
  }, [value]);

  useEffect(() => {
    if (resetTextValue === '') setTextValue('');
    setValidateError(memoizedInputError);
  }, [memoizedInputError, resetTextValue]);

  return {
    inputRef,
    inputError,
    handleChangeInputText,
    resetTextValue,
    textValue,
  };
};
