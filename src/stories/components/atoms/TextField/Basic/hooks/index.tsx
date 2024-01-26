import {
  ChangeEventHandler,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TextFieldProps } from '../index';

import { ValidateResultContext } from '@/stories/common/context';

export const useTextFieldFunctions = ({
  label,
  inputHandler,
  resetTextValue,
  inputProps,
  disabledFlg,
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);
  const memoizedInputError = useMemo(() => inputError, [inputError]);
  const handleChangeInputError = useContext(ValidateResultContext);
  const [textValue, settextValue] = useState('');

  const handleChangeInputText: ChangeEventHandler<HTMLInputElement> = (event) => {
    settextValue(event.target.value);
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid || ref.value === '') {
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
    if (handleChangeInputError) {
      handleChangeInputError(inputError);
    }
  }, [memoizedInputError]);

  return {
    inputRef,
    inputError,
    handleChangeInputText,
    resetTextValue,
    label,
    disabledFlg,
    inputProps,
    textValue,
  };
};
