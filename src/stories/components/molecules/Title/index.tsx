import { Box } from '@mui/system';
import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { TitleProps } from './types';
import { BodyPrimaryText } from '../../atoms/Typography/BodyPrimaryText';

import { useUserDataStore } from '@/stories/common/stores';
import theme from '@/stories/common/theme';
import { Typography } from '@/stories/components/atoms/Typography/Base';

export const Title: FC<TitleProps> = ({ title }: TitleProps) => {
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );
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
