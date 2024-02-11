import { ListItemText } from '@mui/material';
import { FC } from 'react';

import { MessageType } from '@/stories/common/types/db';
import { Box } from '@/stories/components/atoms/Box/Basic';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export type LogsListItem = ListItemProps & {
  item: MessageType;
};

export const LogsListItem: FC<LogsListItem> = ({ item }: LogsListItem) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Box>
            <BodyPrimaryText>{`to: ${item.to_user}`}</BodyPrimaryText>
            <BodyPrimaryText>{`from: ${item.from_user}`}</BodyPrimaryText>
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
