import { useState } from 'react';

import { LogsListProp } from '..';
import { sortedUnionMessage } from '../functions';

import { MessageContentsType } from '@/stories/common/types';

export const useLogsMainFunctions = ({ data, personId }: LogsListProp) => {
  const [displayLogFlg, setDisplayLogFlg] = useState(false);
  const [messageLog, setMessageLog] = useState<MessageContentsType[]>([]);
  const orgMessageLog = data[personId] && data[personId].message;
  const logExistFlg = orgMessageLog
    ? (orgMessageLog.from && orgMessageLog.from.length) ||
      (orgMessageLog.to && orgMessageLog.to.length)
    : false;
  const handleClickDisplayLogs = () => {
    setDisplayLogFlg(true);
    sortMessage();
  };

  const sortMessage = () => {
    setMessageLog([]);
    const unionMessage: MessageContentsType[] = sortedUnionMessage(orgMessageLog);
    setMessageLog(unionMessage);
  };
  return {
    logExistFlg,
    handleClickDisplayLogs,
    displayLogFlg,
    messageLog,
  };
};
