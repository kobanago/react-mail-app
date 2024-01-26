import {
  FC,
  useRef,
  useState,
  ChangeEventHandler,
  useContext,
  useEffect,
  useMemo,
} from 'react';

import { Box } from '../../Box/Basic';
import { TextFieldProps, TextField as BaseTextField } from '../Base';

import {
  InitInputEventStateContext,
  ResetSendStateContext,
  ValidateResultContext,
} from '@/stories/common/context';
import theme from '@/stories/common/theme';

export const TextField: FC<TextFieldProps> = ({
  label,
  inputHandler,
  inputProps,
  disabledFlg,
  value,
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);
  const memoizedInputError = useMemo(() => inputError, [inputError]);
  const handleChangeInputError = useContext(ValidateResultContext);
  const { initialInputOccurred, setInitialInputOccurred } =
    useContext(InitInputEventStateContext) ?? {};
  const { sendState, textValue, dispatch } = useContext(ResetSendStateContext) ?? {};

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!initialInputOccurred && setInitialInputOccurred) {
      setInitialInputOccurred(true);
    }
    if (sendState === 2 && dispatch) {
      dispatch('INIT');
    }

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

  return (
    <Box margin={theme.spacing(1)} width='100%' display='flex' justifyContent='center'>
      <BaseTextField
        margin='normal'
        variant='filled'
        fullWidth={true}
        type='text'
        disabledFlg={disabledFlg}
        error={disabledFlg ? undefined : inputError}
        inputProps={inputProps}
        inputRef={inputRef}
        helperText={disabledFlg ? '' : inputRef?.current?.validationMessage}
        inputHandler={handleChange}
        label={label}
        InputLabelProps={{ shrink: true }}
        value={textValue === '' ? textValue : value}
        required
      />
    </Box>
  );
};
