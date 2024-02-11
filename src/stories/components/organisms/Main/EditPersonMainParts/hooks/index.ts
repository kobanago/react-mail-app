import { ChangeEventHandler, useContext, useEffect, useState } from 'react';

import { getTargetData } from '@/controllers';
import {
  SetPersonDataContext,
  SetPersonListContext,
  SetUserDataContext,
} from '@/stories/common/context';
import { createPersonData, createPersonList } from '@/stories/common/functions';
import { UserDataType } from '@/stories/common/types/db';
import { SetProcessFlgType } from '@/stories/common/types/reducers';

type useSelectPersonHandler = {
  processFlg: SetProcessFlgType;
  setSelectEventFlg: React.Dispatch<React.SetStateAction<boolean>>;
};
export const useSelectPersonHandler = ({
  processFlg,
  setSelectEventFlg,
}: useSelectPersonHandler) => {
  const { editProcessingFlg, removeProcessingFlg } = processFlg;
  const { personList, personListDispatch } = useContext(SetPersonListContext) ?? {};
  const { personData, personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};
  const [, setPersonName] = useState('');
  const [, setPersonMail] = useState('');

  useEffect(() => {
    (async () => {
      try {
        if (!userData || !personData || !personListDispatch || !personList) return;
        const newList = await createPersonList(userData.id, personList);
        if (!newList || !newList.length) return;
        personListDispatch({ type: 'SUCCESS', payload: newList });
      } catch (error) {
        alert('error occured!');
        console.error(error);
      }
    })();
  }, []);

  const selectPersonHandler: React.MouseEventHandler<HTMLLIElement> = (
    event,
  ): boolean | undefined => {
    if (!personDataDispatch || !userData || (!editProcessingFlg && !removeProcessingFlg))
      return;
    if (personData && personData.id.toString() === event.currentTarget.id) {
      setSelectEventFlg(true);
      return;
    }
    getTargetData('users', 'id', event.currentTarget.id)
      .then((result) => {
        if (!result) throw new Error('something wrong');
        const tmpData = result as UserDataType[];
        if (!tmpData.length) throw new Error('something wrong');
        const data = tmpData[0];
        createPersonData(userData.id, data.mail, data).then((newData) => {
          if (!newData) throw new Error('something wrong');
          personDataDispatch({ type: 'SUCCESS', payload: newData });
          setSelectEventFlg(true);
        });
      })
      .catch((error) => {
        console.error(error);
        personDataDispatch({ type: 'ERROR', payload: undefined });
      });
  };

  const nameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonName(event.target.value);
  };

  const mailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPersonMail(event.target.value);
  };

  return { selectPersonHandler, nameHandler, mailHandler };
};
