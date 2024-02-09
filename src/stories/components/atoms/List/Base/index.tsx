import { ListProps, List as MuiList } from '@mui/material';
import { FC } from 'react';

export const List: FC<ListProps> = ({ ...props }: ListProps) => (
  <MuiList {...props}>{props.children}</MuiList>
);
