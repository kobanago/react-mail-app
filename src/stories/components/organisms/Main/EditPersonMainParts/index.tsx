import { useEffect, useState } from 'react';

import { useSelectPersonHandler } from './hooks';
import { PersonForms } from '../../Forms/PersonForms';

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
  const { personData } = usePersonDataStore((state) => ({
    personData: state.personData,
  }));
  const setListClickFlg = useLinkClickFlgStore((state) => state.setListClickFlg);
  const [selectEventFlg, setSelectEventFlg] = useState(false);
  const { selectPersonHandler, nameHandler, mailHandler } = useSelectPersonHandler({
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
    <Box>
      {personList && personList.length ? (
        <PersonList selectHandler={selectPersonHandler} />
      ) : (
        <BodySubText>no data</BodySubText>
      )}
      <PersonForms />
    </Box>
  );
};
