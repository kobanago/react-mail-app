import { useContext, useEffect, useState } from 'react';

import { getMessageList } from '@/controllers';
import { SetPersonDataContext, SetUserDataContext } from '@/stories/common/context';
import { MessageType } from '@/stories/common/types';

export const useLogsMainFunctions = () => {
  const { personData } = useContext(SetPersonDataContext) ?? {};
  const { userData } = useContext(SetUserDataContext) ?? {};
  const [displayLogFlg, setDisplayLogFlg] = useState(false);
  const [messageLog, setMessageLog] = useState<MessageType[]>([]);

  const setMessageList = async () => {
    if (userData && personData) {
      const orgMessageList = await getMessageList(userData.id, personData.id);
      if (orgMessageList) {
        setMessageLog(orgMessageList);
      }
    }
  };

  const handleClickDisplayLogs = () => {
    if (displayLogFlg) {
      setDisplayLogFlg(false);
    } else {
      setDisplayLogFlg(true);
    }
  };

  useEffect(() => {
    (async () => {
      await setMessageList();
    })();
  }, [personData]);

  return {
    handleClickDisplayLogs,
    displayLogFlg,
    messageLog,
  };
};
