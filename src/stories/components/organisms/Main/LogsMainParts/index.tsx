import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { useLogsMainFunctions } from './hooks';

import theme from '@/stories/common/theme';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { IconButton } from '@/stories/components/atoms/IconButton/Base';
import { Paper } from '@/stories/components/atoms/Paper/Base';
import { Typography } from '@/stories/components/atoms/Typography/Base';
import { BodySubText } from '@/stories/components/atoms/Typography/BodySubText';
import { LogsList } from '@/stories/components/molecules/List/LogsList';

export const LogsMainParts = () => {
  const { handleClickDisplayLogs, displayLogFlg, messageLog } = useLogsMainFunctions();

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
      {messageLog && messageLog.length ? (
        <Box>
          <IconButton
            icon={<ReceiptLongIcon />}
            label={displayLogFlg ? 'Close logs' : 'Display logs'}
            disabled={false}
            clickHandler={() => handleClickDisplayLogs()}
          />
          {displayLogFlg && <LogsList messageLog={messageLog} />}
        </Box>
      ) : (
        <BodySubText>no data</BodySubText>
      )}
    </Paper>
  );
};
