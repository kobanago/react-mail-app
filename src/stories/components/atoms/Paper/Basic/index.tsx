import { PaperProps } from '@mui/material';
import { FC } from 'react';

import { Paper as BasePaper } from '../Base';

import theme from '@/stories/common/theme';

export const Paper: FC<PaperProps> = ({ children }: PaperProps) => {
  return (
    <BasePaper sx={{ margin: theme.spacing(0.5), padding: theme.spacing(2) }}>
      {children}
    </BasePaper>
  );
};
