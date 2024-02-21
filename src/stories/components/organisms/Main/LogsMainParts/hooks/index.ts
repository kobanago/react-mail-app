import { useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { getMessageList } from '@/controllers';
import {
  usePersonDataStore,
  useSendStateStore,
  useUserDataStore,
} from '@/stories/common/stores';
import { MessageType } from '@/stories/common/types/db';

export const useLogsMainFunctions = () => {
  const { personData } = usePersonDataStore(
    useShallow((state) => ({
      personData: state.personData,
    })),
  );
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );
  const [displayLogFlg, setDisplayLogFlg] = useState(false);
  const [messageLog, setMessageLog] = useState<MessageType[]>([]);
  const { sendState } = useSendStateStore(
    useShallow((state) => ({
      sendState: state.sendState,
    })),
  );

  const setMessageList = useCallback(async () => {
    try {
      if (!userData || !personData) return;
      const orgMessageList = await getMessageList(userData.id, personData.id);
      if (orgMessageList) setMessageLog(orgMessageList);
    } catch (error) {
      console.error('Error fetching display logs:', error);
      alert('error occured!');
    }
  }, [personData, sendState]);

  const handleClickDisplayLogs = useCallback(() => {
    if (displayLogFlg) {
      setDisplayLogFlg(false);
    } else {
      setDisplayLogFlg(true);
    }
  }, [displayLogFlg]);

  useEffect(() => {
    (async () => {
      await setMessageList();
    })();
  }, [personData]);

  useEffect(() => {
    (async () => {
      if (sendState !== 2) return;
      await setMessageList();
    })();
  }, [sendState]);

  return {
    handleClickDisplayLogs,
    displayLogFlg,
    messageLog,
  };
};
