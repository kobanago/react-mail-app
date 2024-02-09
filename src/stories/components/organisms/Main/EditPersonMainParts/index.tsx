import { useContext, useEffect, useReducer, useState } from 'react';

import { useSelectPersonHandler } from './hooks';
import { PersonForms } from '../../Forms/PersonForms';

import {
  SetLinkClickFlgContext,
  SetPersonDataContext,
  SetPersonListContext,
  SetProcessFlgContext,
  ValidateResultContext,
} from '@/stories/common/context';
import { setProcessFlgReducer } from '@/stories/common/reducers';
import { UserDataType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export const EditPersonMainParts = () => {
  const { personList } = useContext(SetPersonListContext) ?? {};
  const [processFlg, processFlgDispatch] = useReducer(setProcessFlgReducer, {
    addProcessingFlg: false,
    editProcessingFlg: false,
    removeProcessingFlg: false,
  });
  const { personData } = useContext(SetPersonDataContext) ?? {};
  const [listClickFlg, setListClickFlg] = useReducer(
    (state: boolean, action: boolean) => (action !== undefined ? action : state),
    false,
  );
  const [validateError, setValidateError] = useReducer(
    (state: boolean, action: boolean) => (action !== undefined ? action : state),
    false,
  );
  const [selectEventFlg, setSelectEventFlg] = useState(false);
  const { selectPersonHandler, nameHandler, mailHandler } = useSelectPersonHandler({
    processFlg,
    setSelectEventFlg,
  });

  useEffect(() => {
    if (!selectEventFlg || !personData) return;
    setListClickFlg(true);
    const data = personData as UserDataType;
    const name = data.person_display_name ? data.person_display_name : data.name;
    nameHandler({
      target: { value: name },
    } as React.ChangeEvent<HTMLInputElement>);
    mailHandler({
      target: { value: data.mail },
    } as React.ChangeEvent<HTMLInputElement>);
    setSelectEventFlg(false);
  }, [personData, selectEventFlg]);

  return (
    <ValidateResultContext.Provider value={{ validateError, setValidateError }}>
      <SetProcessFlgContext.Provider value={{ processFlg, processFlgDispatch }}>
        <SetLinkClickFlgContext.Provider value={{ listClickFlg, setListClickFlg }}>
          <Box>
            {personList && personList.length ? (
              <PersonList selectHandler={selectPersonHandler} />
            ) : (
              <BodySubText>no data</BodySubText>
            )}
            <PersonForms />
          </Box>
        </SetLinkClickFlgContext.Provider>
      </SetProcessFlgContext.Provider>
    </ValidateResultContext.Provider>
  );
};
