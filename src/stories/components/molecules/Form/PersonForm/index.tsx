import { MouseEventHandler, useCallback, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { processResultFunc } from './functions';
import { useFormFunctions } from './hooks';

import {
  useFormClearFlgStore,
  usePersonDataStore,
  usePersonListStore,
  useProcessFlgStore,
  useUserDataStore,
  useValidateResultStore,
} from '@/stories/common/stores';
import theme from '@/stories/common/theme';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { FlexBox } from '@/stories/components/atoms/Box/FlexBox';
import { Button } from '@/stories/components/atoms/Button/Basic';
import { FormStateButton } from '@/stories/components/atoms/Button/FormStateButton';
import { FormControl } from '@/stories/components/atoms/FormControl/Basic';
import { TextField } from '@/stories/components/atoms/TextField/Basic';
import { MailTextField } from '@/stories/components/atoms/TextField/MailTextField';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export const PersonForm = () => {
  const {
    personName,
    personMail,
    abortNameFlg,
    abortMailFlg,
    operationMessage,
    clearClickHandler,
    cancelClickHandler,
    switchProcessFlg,
    inputNameHandler,
    inputMailHandler,
  } = useFormFunctions();
  const { formClearFlg } = useFormClearFlgStore(
    useShallow((state) => ({
      formClearFlg: state.formClearFlg,
    })),
  );
  const {
    processFlg: { addFlg, editFlg, removeFlg },
  } = useProcessFlgStore(
    useShallow((state) => ({
      processFlg: state.processFlg,
    })),
  );
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );
  const { personData, setPersonData, resetPersonData } = usePersonDataStore(
    useShallow((state) => ({
      personData: state.personData,
      setPersonData: state.setPersonData,
      resetPersonData: state.resetPersonData,
    })),
  );
  const { personList, setPersonList } = usePersonListStore(
    useShallow((state) => ({
      personList: state.personList,
      setPersonList: state.setPersonList,
    })),
  );
  const { validateError } = useValidateResultStore(
    useShallow((state) => ({
      validateError: state.validateError,
    })),
  );

  const FormButtonClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const state = event.currentTarget.innerText;
    if (!addFlg && !editFlg && !removeFlg) {
      switchProcessFlg(state, true);
      return;
    }
    if (!personMail || !userData) return;
    processResultFunc({ state, personName, personMail, userData, personData })
      .then((result) => {
        if (!result || result < 200 || result >= 300) throw new Error('something wrong');
        const name = personName ? personName : personData ? personData.name : '';
        const operation = state.replace(' END?', '');
        const message = name
          ? `Complete ${operation} ${name}!!`
          : `Complete ${operation}!!`;
        alert(message);
        successUpdate();
      })
      .catch((error: Error) => {
        alert('error occured: ' + error.message);
        console.error(error);
      });
  };

  const successUpdate = useCallback(() => {
    cancelClickHandler();
    if (!userData) throw new Error('something wrong');
    setPersonList(userData.id, personList)
      .then(() => {
        if (!editFlg || !personData) {
          resetPersonData();
          return;
        }
        const personId = personData.id.toString();
        setPersonData({ personId, userData, personData })
          .then()
          .catch(() => {
            throw new Error('something wrong');
          });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {}, [formClearFlg]);

  return (
    <FormControl sx={{ width: '70%', padding: theme.spacing(1) }} margin='normal'>
      <Box>
        <TextField
          label={'Name'}
          value={personName}
          resetTextValue={formClearFlg ? '' : undefined}
          inputHandler={inputNameHandler}
          disabledFlg={abortNameFlg}
          requiredFlg={false}
        />
        <MailTextField
          value={personMail}
          resetTextValue={formClearFlg ? '' : undefined}
          inputHandler={inputMailHandler}
          disabledFlg={abortMailFlg}
        />
      </Box>
      <BodyPrimaryText>{operationMessage}</BodyPrimaryText>
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
