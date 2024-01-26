import { FC } from 'react';

import { useTextFieldFunctions } from './hooks';
import { Box } from '../../Box/Basic';
import {
  TextFieldProps as BaseTextFieldProps,
  TextField as BaseTextField,
} from '../Base';

import theme from '@/stories/common/theme';

export interface TextFieldProps extends BaseTextFieldProps {
  resetTextValue?: string;
}

export const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  const {
    inputRef,
    inputError,
    handleChangeInputText,
    resetTextValue,
    textValue,
    label,
    disabledFlg,
    inputProps,
  } = useTextFieldFunctions(props);

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
        inputHandler={handleChangeInputText}
        label={label}
        InputLabelProps={{ shrink: true }}
        value={resetTextValue === '' ? resetTextValue : textValue}
        required
      />
    </Box>
  );
};
