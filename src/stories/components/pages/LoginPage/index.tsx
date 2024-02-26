import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { CommonTemplate } from '../../templates/CommonTemplate';

import {
  usePersonDataStore,
  usePersonListStore,
  useUserDataStore,
} from '@/stories/common/stores';
import { supabase } from '@/supabaseClinet';

export const LoginPage = () => {
  const [userMail, setUserMail] = useState('');
  const { userData, setUserData, resetUserData } = useUserDataStore(
    useShallow((state) => ({
      userData: state.userData,
      setUserData: state.setUserData,
      resetUserData: state.resetUserData,
    })),
  );
  const { resetPersonData } = usePersonDataStore(
    useShallow((state) => ({
      resetPersonData: state.resetPersonData,
    })),
  );
  const { setPersonList, resetPersonList } = usePersonListStore(
    useShallow((state) => ({
      setPersonList: state.setPersonList,
      resetPersonList: state.resetPersonList,
    })),
  );

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
    resetPersonData();
    resetPersonList();
    setUserMail('');
  };

  useEffect(() => {
    (async () => {
      try {
        resetPersonData();
        if (!userMail) return;
        await setUserData(userMail);
        const { userData } = useUserDataStore.getState();
        if (!userData) return;
        await setPersonList(userData.id, undefined);
      } catch (error) {
        console.error(error);
        alert('error occured!');
        resetUserData();
        resetPersonList();
      }
    })();
  }, [userMail]);

  return <CommonTemplate title='LOGIN' />;
};
