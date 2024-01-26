import { ContainerProps } from '@mui/material';
import { FC } from 'react';

import { Container as BaseContainer } from '../Base';

import theme from '@/stories/common/theme';

export const Container: FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <BaseContainer
      sx={{
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className='main'
    >
      {children}
    </BaseContainer>
  );
};
