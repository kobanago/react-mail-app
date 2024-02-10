import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { FC } from 'react';

import theme from '@/stories/common/theme';
import { Icon } from '@/stories/components/atoms/Icon/Basic';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export type PersonListItemProps = ListItemProps & {
  id: string;
  message: string;
};

export const PersonListItem: FC<PersonListItemProps> = ({
  id,
  message,
  selectHandler,
}: PersonListItemProps) => {
  return (
    <ListItem
      key={id}
      id={id}
      selectHandler={selectHandler}
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:active, &:focus': {
          transform: 'scale(0.97)',
        },
        cursor: 'pointer',
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <Icon icon={<AccountCircleIcon />} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={<BodyPrimaryText align='left'>{message}</BodyPrimaryText>} />
    </ListItem>
  );
};
