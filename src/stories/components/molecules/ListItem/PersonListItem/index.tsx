import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { FC } from 'react';

import theme from '@/stories/common/theme';
import { Icon } from '@/stories/components/atoms/Icon/Basic';
import { ListItemProps } from '@/stories/components/atoms/ListItem/Base';
import { ListItem } from '@/stories/components/atoms/ListItem/Basic';
import { BodyPrimaryText } from '@/stories/components/atoms/Typography/BodyPrimaryText';

export interface PersonListItemProps extends ListItemProps {
  id: string;
  message: string;
}

const selectPersonHandler: React.MouseEventHandler<HTMLLIElement> = (evt) => {
  // const value = evt.currentTarget.innerText;
  console.log(evt.currentTarget.innerText);
  console.log(evt.currentTarget.id);
  console.log(evt.currentTarget);
  console.log(evt);
  // const ary = value.split('(');
  // const name = ary[0].trim();
  // const mail = ary[1].replace(')', '');
  // const id = evt.currentTarget.id
  // setPersonMail(name);
  // setPersonMail(mail);
  // inputNameHandler({ target: { value: name } } as React.ChangeEvent<HTMLInputElement>);
  // inputMailHandler({ target: { value: mail } } as React.ChangeEvent<HTMLInputElement>);
};
export const PersonListItem: FC<PersonListItemProps> = ({
  id,
  message,
}: PersonListItemProps) => {
  return (
    <ListItem
      key={id}
      id={id}
      selectHandler={selectPersonHandler}
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
      <ListItemText primary={<BodyPrimaryText>{message}</BodyPrimaryText>} />
    </ListItem>
  );
};
