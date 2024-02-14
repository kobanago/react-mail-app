import { ListItemProps as MuiListItemProps } from '@mui/material';
import { MouseEventHandler } from 'react';

export type ListItemProps = MuiListItemProps & {
  label?: string;
  selectHandler?: MouseEventHandler<HTMLLIElement>;
};
