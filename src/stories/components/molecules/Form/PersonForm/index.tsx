import { FC, MouseEventHandler, useContext, useEffect, useReducer } from 'react';

import { useFormFunctions } from './hooks';

import {
  SetProcessFlgContext,
  SetPersonListContext,
  ValidateResultContext,
} from '@/stories/common/context';
import theme from '@/stories/common/theme';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { ButtonProps } from '@/stories/components/atoms/Button/Base';
import { Button } from '@/stories/components/atoms/Button/Basic';
import { FormStateButton } from '@/stories/components/atoms/Button/FormStateButton';
import { FormControl } from '@/stories/components/atoms/FormControl/Basic';
import { TextFieldProps } from '@/stories/components/atoms/TextField/Base';
import { TextField } from '@/stories/components/atoms/TextField/Basic';
import { MailTextField } from '@/stories/components/atoms/TextField/MailTextField';

export type PersonFormType = TextFieldProps &
  ButtonProps & {
    processResultFunc: () => void;
  };

export const PersonForm: FC<PersonFormType> = ({ processResultFunc }: PersonFormType) => {
  const [clearFlg, dispatch] = useReducer(
    (state: boolean, action: boolean) => (action !== undefined ? action : state),
    false,
  );
  const {
    personName,
    personMail,
    abortNameFlg,
    abortMailFlg,
    clearClickHandler,
    cancelClickHandler,
    switchProcessFlg,
    inputNameHandler,
    inputMailHandler,
  } = useFormFunctions({ clearFlg, dispatch });
  const { processFlg } = useContext(SetProcessFlgContext) ?? {};
  const { personList } = useContext(SetPersonListContext) ?? {};
  const { validateError } = useContext(ValidateResultContext) ?? {};
  const { addProcessingFlg, editProcessingFlg, removeProcessingFlg } = processFlg || {};
  const addFlg = addProcessingFlg ?? false;
  const editFlg = editProcessingFlg ?? false;
  const removeFlg = removeProcessingFlg ?? false;

  const FormButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const state = event.currentTarget.innerText;
    if (!addFlg && !editFlg && !removeFlg) {
      switchProcessFlg(state);
      return;
    }
    processResultFunc();
  };

  useEffect(() => {}, [clearFlg]);

  return (
    <FormControl sx={{ width: '70%', padding: theme.spacing(1) }} margin='normal'>
      <Box>
        <TextField
          label={'Name'}
          value={personName}
          inputHandler={inputNameHandler}
          disabledFlg={abortNameFlg}
        />
        <MailTextField
          label={'Mail'}
          value={personMail}
          inputHandler={inputMailHandler}
          disabledFlg={abortMailFlg}
        />
      </Box>
      <FlexBox>
        <FormStateButton
          label={'add'}
          clickHandler={FormButtonClickHandler}
          processing={addFlg}
          disabled={validateError || editFlg || removeFlg}
        />
        <FormStateButton
          label={'edit'}
          clickHandler={FormButtonClickHandler}
          processing={editFlg}
          disabled={
            !personList || !personList.length || validateError || addFlg || removeFlg
          }
        />
        <FormStateButton
          label={'remove'}
          clickHandler={FormButtonClickHandler}
          processing={removeFlg}
          disabled={
            !personList || !personList.length || validateError || editFlg || addFlg
          }
        />
      </FlexBox>
      <FlexBox>
        <Button
          label={'input contents clear'}
          disabled={false}
          clickHandler={clearClickHandler}
        />
        <Button
          label={'operation cancel'}
          disabled={false}
          clickHandler={cancelClickHandler}
        />
      </FlexBox>
    </FormControl>
  );
};
