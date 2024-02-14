import { Box } from '@mui/system';
import { FC, useContext } from 'react';

import { TitleProps } from './types';
import { BodyPrimaryText } from '../../atoms/Typography/BodyPrimaryText';

import { SetUserDataContext } from '@/stories/common/context';
import theme from '@/stories/common/theme';
import { Typography } from '@/stories/components/atoms/Typography/Base';

export const Title: FC<TitleProps> = ({ title }: TitleProps) => {
  const { userData } = useContext(SetUserDataContext) ?? {};
  const message = userData
    ? `login user : ${userData?.name} (${userData?.mail})`
    : 'please login...';
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
