import { ListItem as MuiListItem } from '@mui/material';
import { FC } from 'react';

import { ListItemProps } from './types';

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
