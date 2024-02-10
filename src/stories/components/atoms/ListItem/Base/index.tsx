import {
  ListItemProps as MuiListItemProps,
  ListItem as MuiListItem,
} from '@mui/material';
import { FC, MouseEventHandler } from 'react';

export type ListItemProps = MuiListItemProps & {
  label?: string;
  selectHandler?: MouseEventHandler<HTMLLIElement>;
};

export const ListItem: FC<ListItemProps> = ({
  selectHandler,
  ...props
}: ListItemProps) => {
  return (
    <MuiListItem {...props} onClick={selectHandler}>
      {props.children}
    </MuiListItem>
  );
};
