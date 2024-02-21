import { ChangeEventHandler, useCallback, useContext, useEffect, useState } from 'react';

import { SetPersonListContext } from '@/stories/common/context';
import { createPersonList } from '@/stories/common/functions';
import { usePersonDataStore, useUserDataStore } from '@/stories/common/stores';
import { useSelectPersonHandlerType } from '@/stories/common/types/functions';

export const useSelectPersonHandler = ({
  processFlg,
  setSelectEventFlg,
}: useSelectPersonHandlerType) => {
  const { editProcessingFlg, removeProcessingFlg } = processFlg;
  const { personList, personListDispatch } = useContext(SetPersonListContext) ?? {};
  const { personData, setPersonData } = usePersonDataStore((state) => ({
    personData: state.personData,
    setPersonData: state.setPersonData,
  }));
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
    if (!userData || (!editProcessingFlg && !removeProcessingFlg)) return;
    if (personData && personData.id.toString() === event.currentTarget.id) {
      setSelectEventFlg(true);
      return;
    }
    const personId = event.currentTarget.id.toString();
    setPersonData({ personId, userData, personData: undefined })
      .then(() => setSelectEventFlg(true))
      .catch((error) => console.error(error));
  };

  const nameHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setPersonName(event.target.value);
  }, []);

  const mailHandler: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setPersonMail(event.target.value);
  }, []);

  return { selectPersonHandler, nameHandler, mailHandler };
};
