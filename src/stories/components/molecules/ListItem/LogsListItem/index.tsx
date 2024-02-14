import { ListItemText } from '@mui/material';
import { FC } from 'react';

import { LogsListItemProps } from './types';

import { Box } from '@/stories/components/atoms/Box/Basic';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export const LogsListItem: FC<LogsListItemProps> = ({ item }: LogsListItemProps) => {
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
