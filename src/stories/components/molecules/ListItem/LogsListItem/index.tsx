import { ListItemText } from '@mui/material';
import { FC } from 'react';

import theme from '@/stories/common/theme';
import { MessageContentsType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { Typography } from '@/stories/components/atoms/Typography/Base';

export interface LogsListItem extends ListItemProps {
  item: MessageContentsType;
}

export const LogsListItem: FC<LogsListItem> = ({ item }: LogsListItem) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Box>
            <Typography variant='body1' color={theme.palette.text.primary} align='center'>
              {`to: ${item.to}`}
            </Typography>
            <Typography variant='body1' color={theme.palette.text.primary} align='center'>
              {`from: ${item.from}`}
            </Typography>
          </Box>
        }
        secondary={
          <Box>
            <Typography variant='body1' color={theme.palette.text.primary} align='center'>
              {`time: ${item.time}`}
            </Typography>
            <Typography variant='body1' color={theme.palette.text.primary} align='center'>
              {`comment: ${item.comment}`}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
};
