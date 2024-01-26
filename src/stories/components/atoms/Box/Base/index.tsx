import { BoxProps, Box as MuiBox } from '@mui/material';
import { FC } from 'react';

export const Box: FC<BoxProps> = ({ ...props }: BoxProps) => (
  <MuiBox {...props}>{props.children}</MuiBox>
);
