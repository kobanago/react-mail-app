import { TypographyProps } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

import { BodyPrimaryText } from '../../atoms/Typography/BodyPrimaryText';

import theme from '@/stories/common/theme';
import { Typography } from '@/stories/components/atoms/Typography/Base';

export type TitleProps = TypographyProps & {
  title: string;
  message: string;
};

export const Title: FC<TitleProps> = ({ title, message }: TitleProps) => {
  return (
    <Box m={2}>
      <Typography variant='h2' color={theme.palette.text.primary} align='center'>
        {title}
      </Typography>
      <Box m={1}>
        <BodyPrimaryText>{message}</BodyPrimaryText>
      </Box>
    </Box>
  );
};
