import { FC, MouseEventHandler } from 'react';

import { useFormFunctions } from './hooks';

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
  const {
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
  } = useFormFunctions();

  const FormButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (addProcessingFlg || editProcessingFlg || removeProcessingFlg) {
      processResultFunc();
    }
    switchProcessFlg(evt.currentTarget.innerText);
  };

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
          processing={addProcessingFlg}
          disabled={editProcessingFlg || removeProcessingFlg}
        />
        <FormStateButton
          label={'edit'}
          clickHandler={FormButtonClickHandler}
          processing={editProcessingFlg}
          disabled={addProcessingFlg || removeProcessingFlg}
        />
        <FormStateButton
          label={'remove'}
          clickHandler={FormButtonClickHandler}
          processing={removeProcessingFlg}
          disabled={editProcessingFlg || addProcessingFlg}
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
