import { FC } from 'react';

import { useTextFieldFunctions } from './hooks';
import { Box } from '../../Box/Basic';
import {
  TextFieldProps as BaseTextFieldProps,
  TextField as BaseTextField,
} from '../Base';

import theme from '@/stories/common/theme';

export type TextFieldProps = BaseTextFieldProps & {
  resetTextValue?: string;
};

export const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  const { inputRef, inputError, handleChangeInputText, resetTextValue, textValue } =
    useTextFieldFunctions(props);

  return (
    <Box margin={theme.spacing(1)} width='100%' display='flex' justifyContent='center'>
      <BaseTextField
        margin='normal'
        variant='filled'
        fullWidth={true}
        type='text'
        disabledFlg={props.disabledFlg}
        error={props.disabledFlg ? undefined : inputError}
        inputProps={props.inputProps}
        inputRef={inputRef}
        helperText={props.disabledFlg ? '' : inputRef?.current?.validationMessage}
        inputHandler={handleChangeInputText}
        label={props.label}
        InputLabelProps={{ shrink: true }}
        value={
          resetTextValue === '' ? resetTextValue : textValue ? textValue : props.value
        }
        requiredFlg={props.requiredFlg}
      />
    </Box>
  );
};
