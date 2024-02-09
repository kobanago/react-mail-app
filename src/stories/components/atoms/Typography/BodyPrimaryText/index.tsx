import { TypographyProps } from '@mui/material';
import { FC } from 'react';

import { Typography } from '../Base';

import theme from '@/stories/common/theme';

export const BodyPrimaryText: FC<TypographyProps> = ({ children }: TypographyProps) => {
  return (
    <Typography variant='body1' color={theme.palette.text.primary} align='center'>
      {children}
    </Typography>
  );
};
