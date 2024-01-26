import { BoxProps } from '@mui/material';
import { FC } from 'react';

import { Box as BaseBox } from '../Base';

export const FlexBox: FC<BoxProps> = ({ children }: BoxProps) => {
  return (
    <BaseBox
      width='100%'
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
    >
      {children}
    </BaseBox>
  );
};
