import { useContext, useEffect, useState } from 'react';

import { CommonTemplate } from '../../templates/CommonTemplate';

import { SetPersonDataContext, SetPersonListContext } from '@/stories/common/context';
import { createPersonList } from '@/stories/common/functions';
import { useUserDataStore } from '@/stories/common/stores';
import { supabase } from '@/supabaseClinet';

export const LoginPage = () => {
  const [userMail, setUserMail] = useState('');
  const { userData, setUserData, resetUserData } = useUserDataStore((state) => ({
    userData: state.userData,
    setUserData: state.setUserData,
    resetUserData: state.resetUserData,
  }));
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { personListDispatch } = useContext(SetPersonListContext) ?? {};

  supabase.auth.onAuthStateChange((event, session) => {
    setTimeout(() => {
      switch (event) {
        case 'SIGNED_IN':
          if (session && session.user.email && !userData) {
            setUserMail(session?.user.email);
          }
          break;
        case 'SIGNED_OUT':
          resetContext();
          break;
        case 'TOKEN_REFRESHED':
          resetContext();
          break;
        default:
          break;
      }
    }, 0);
  });

  const resetContext = () => {
    resetUserData();
    if (!personListDispatch || !personDataDispatch) return;
    personDataDispatch({ type: 'RESET', payload: undefined });
    personListDispatch({ type: 'RESET', payload: undefined });
    setUserMail('');
  };

  useEffect(() => {
    (async () => {
      try {
        if (!personDataDispatch) return;
        personDataDispatch({ type: 'RESET', payload: undefined });
        if (!userMail) return;
        await setUserData(userMail);
        const { userData } = useUserDataStore.getState();
        if (!userData) return;
        const newList = await createPersonList(userData.id, undefined);
        if (!newList || !newList.length || !personListDispatch) return;
        personListDispatch({ type: 'SUCCESS', payload: newList });
      } catch (error) {
        console.error(error);
        alert('error occured!');
        resetUserData();
        if (!personListDispatch) return;
        personListDispatch({ type: 'ERROR', payload: undefined });
      }
    })();
  }, [userMail]);

  return <CommonTemplate title='LOGIN' />;
};
