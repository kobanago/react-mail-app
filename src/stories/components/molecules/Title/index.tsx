import { TypographyProps } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import theme from '@/stories/common/theme';
import { Typography } from '@/stories/components/atoms/Typography/Base';

export interface TitleProps extends TypographyProps {
  title: string;
  message: string;
}

export const Title: FC<TitleProps> = ({ title, message }: TitleProps) => {
  return (
    <Box m={2}>
      <Typography variant='h2' color={theme.palette.text.primary} align='center'>
        {title}
      </Typography>
      <Box m={1}>
        <Typography variant='body1' color={theme.palette.text.primary} align='center'>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};
