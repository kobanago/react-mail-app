import { useContext, useEffect, useState } from 'react';

import { CommonTemplate } from '../../templates/CommonTemplate';

import { getTargetData } from '@/controllers';
import {
  SetPersonDataContext,
  SetPersonListContext,
  SetUserDataContext,
} from '@/stories/common/context';
import { createPersonList } from '@/stories/common/functions';
import { UserDataType } from '@/stories/common/types/db';
import { supabase } from '@/supabaseClinet';

export const LoginPage = () => {
  const [userMail, setUserMail] = useState('');
  const { userDataDispatch } = useContext(SetUserDataContext) ?? {};
  const { personDataDispatch } = useContext(SetPersonDataContext) ?? {};
  const { personListDispatch } = useContext(SetPersonListContext) ?? {};

  supabase.auth.onAuthStateChange((event, session) => {
    setTimeout(() => {
      switch (event) {
        case 'SIGNED_IN':
          resetContext();
          if (session && session.user.email) {
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
    if (!userDataDispatch || !personListDispatch || !personDataDispatch) return;
    userDataDispatch({ type: 'RESET', payload: undefined });
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
        const result = await getTargetData('users', 'mail', userMail);
        if (!result) return;
        const data = result as UserDataType[];

        if (!userDataDispatch) return;
        if (!data.length) {
          userDataDispatch({ type: 'SUCCESS', payload: null });
          return;
        }

        userDataDispatch({ type: 'SUCCESS', payload: data[0] });
        const newList = await createPersonList(data[0].id, undefined);
        if (!newList || !newList.length || !personListDispatch) return;
        personListDispatch({ type: 'SUCCESS', payload: newList });
      } catch (error) {
        console.error(error);
        alert('error occured!');
        if (!personListDispatch || !userDataDispatch) return;
        userDataDispatch({ type: 'ERROR', payload: undefined });
        personListDispatch({ type: 'ERROR', payload: undefined });
      }
    })();
  }, [userMail]);

  return <CommonTemplate title='LOGIN' />;
};
