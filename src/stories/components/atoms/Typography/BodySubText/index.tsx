import { TypographyProps } from '@mui/material';
import { FC } from 'react';

import { Typography } from '../Base';

import theme from '@/stories/common/theme';

export const BodySubText: FC<TypographyProps> = ({ children }: TypographyProps) => {
  return (
    <Typography
      variant='body2'
      color={theme.palette.text.secondary}
      align='center'
      sx={{ padding: theme.spacing(2) }}
    >
      {children}
    </Typography>
  );
};
