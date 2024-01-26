import { BoxProps } from '@mui/material';
import { FC } from 'react';

import { Box as BaseBox } from '../Base';

export const Box: FC<BoxProps> = ({ children }: BoxProps) => {
  return (
    <BaseBox
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      {children}
    </BaseBox>
  );
};
