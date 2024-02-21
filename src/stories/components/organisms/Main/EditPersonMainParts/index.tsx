import { useEffect, useReducer, useState } from 'react';

import { useSelectPersonHandler } from './hooks';
import { PersonForms } from '../../Forms/PersonForms';

import { SetProcessFlgContext } from '@/stories/common/context';
import { setProcessFlgReducer } from '@/stories/common/reducers';
import {
  useLinkClickFlgStore,
  usePersonDataStore,
  usePersonListStore,
} from '@/stories/common/stores';
import { UserDataType } from '@/stories/common/types/db';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { PersonList } from '@/stories/components/molecules/List/PersonList';

export const EditPersonMainParts = () => {
  const { personList } = usePersonListStore((state) => ({
    personList: state.personList,
  }));
  const [processFlg, processFlgDispatch] = useReducer(setProcessFlgReducer, {
    addProcessingFlg: false,
    editProcessingFlg: false,
    removeProcessingFlg: false,
  });
  const { personData } = usePersonDataStore((state) => ({
    personData: state.personData,
  }));
  const setListClickFlg = useLinkClickFlgStore((state) => state.setListClickFlg);
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
    <SetProcessFlgContext.Provider value={{ processFlg, processFlgDispatch }}>
      <Box>
        {personList && personList.length ? (
          <PersonList selectHandler={selectPersonHandler} />
        ) : (
          <BodySubText>no data</BodySubText>
        )}
        <PersonForms />
      </Box>
    </SetProcessFlgContext.Provider>
  );
};
