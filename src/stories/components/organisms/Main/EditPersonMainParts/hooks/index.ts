import { ChangeEventHandler, useCallback, useContext, useEffect, useState } from 'react';

import { SetPersonDataContext, SetPersonListContext } from '@/stories/common/context';
import { createPersonList, setDataToCreateParsonData } from '@/stories/common/functions';
import { useUserDataStore } from '@/stories/common/stores';
import { useSelectPersonHandlerType } from '@/stories/common/types/functions';

export const useSelectPersonHandler = ({
  processFlg,
  setSelectEventFlg,
}: useSelectPersonHandlerType) => {
  const { editProcessingFlg, removeProcessingFlg } = processFlg;
  const { personList, personListDispatch } = useContext(SetPersonListContext) ?? {};
  const { personData, personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useUserDataStore((state) => ({ userData: state.userData }));
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
    setDataToCreateParsonData(event.currentTarget.id, userData, undefined)
      .then((result) => {
        if (!result) throw new Error('something wrong');
        personDataDispatch({ type: 'SUCCESS', payload: result });
        setSelectEventFlg(true);
      })
      .catch((error) => {
        console.error(error);
        personDataDispatch({ type: 'ERROR', payload: undefined });
      });
  };

  const nameHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setPersonName(event.target.value);
  }, []);

  const mailHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setPersonMail(event.target.value);
  }, []);

  return { selectPersonHandler, nameHandler, mailHandler };
};
