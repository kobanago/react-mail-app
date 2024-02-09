import { PaperProps, Paper as MuiPaper } from '@mui/material';
import { FC } from 'react';

export const Paper: FC<PaperProps> = ({ ...props }: PaperProps) => (
  <MuiPaper {...props}>{props.children}</MuiPaper>
);
