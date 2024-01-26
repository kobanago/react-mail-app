import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { FC, useState } from 'react';

import { AddressListType, MessageContentsType, MessageType } from '@/common/types';
import theme from '@/stories/common/theme';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { IconButton } from '@/stories/components/atoms/IconButton/Base';
import { Paper } from '@/stories/components/atoms/Paper/Base';
import { Typography } from '@/stories/components/atoms/Typography/Base';
import { LogsList } from '@/stories/components/molecules/List/LogsList';

export interface LogsListProp {
  data: AddressListType;
  personId: string;
}

export const LogsMainParts: FC<LogsListProp> = ({ data, personId }: LogsListProp) => {
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

  const sortedUnionMessage = (userMessage: MessageType): MessageContentsType[] => {
    const unionMessage: MessageContentsType[] = [];
    const fieldary: ('to' | 'from')[] = ['to', 'from'];
    fieldary.forEach((key) => {
      if (userMessage && userMessage[key]) {
        userMessage[key].forEach((item: MessageContentsType) => {
          unionMessage.push(item);
        });
      }
    });
    unionMessage.sort((x, y) => {
      return x.sortTime - y.sortTime;
    });
    return unionMessage;
  };

  return (
    <Paper sx={{ margin: theme.spacing(0.5), padding: theme.spacing(2) }}>
      <Typography
        variant='h4'
        color={theme.palette.primary.main}
        sx={{ margin: theme.spacing(2, 0) }}
        align='center'
      >
        Logs
      </Typography>
      {logExistFlg ? (
        <Box>
          <IconButton
            icon={<ReceiptLongIcon />}
            label={'Display logs'}
            disabled={false}
            clickHandler={() => handleClickDisplayLogs()}
          />
          {displayLogFlg && <LogsList messageLog={messageLog} />}
        </Box>
      ) : (
        <Typography
          variant='body2'
          color={theme.palette.text.primary}
          align='center'
          sx={{ padding: theme.spacing(2) }}
        >
          no data
        </Typography>
      )}
    </Paper>
  );
};
