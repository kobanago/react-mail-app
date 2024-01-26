import { ListItemText } from '@mui/material';
import { FC } from 'react';

import { MessageContentsType } from '@/stories/common/types';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export interface LogsListItem extends ListItemProps {
  item: MessageContentsType;
}

export const LogsListItem: FC<LogsListItem> = ({ item }: LogsListItem) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Box>
            <BodyPrimaryText>{`to: ${item.to}`}</BodyPrimaryText>
            <BodyPrimaryText>{`from: ${item.from}`}</BodyPrimaryText>
          </Box>
        }
        secondary={
          <Box>
            <BodyPrimaryText>{`time: ${item.time}`}</BodyPrimaryText>
            <BodyPrimaryText>{`comment: ${item.comment}`}</BodyPrimaryText>
          </Box>
        }
      />
    </ListItem>
  );
};
