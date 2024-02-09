import LoginIcon from '@mui/icons-material/Login';
import { FC } from 'react';

import { Box } from '../../Box/Basic';
import { IconButtonProps, IconButton } from '../Base';

import theme from '@/stories/common/theme';

export const LoginButton: FC<IconButtonProps> = ({ clickHandler }: IconButtonProps) => {
  return (
    <Box marginTop={theme.spacing(2)} textAlign='center'>
      <IconButton icon={<LoginIcon />} clickHandler={clickHandler} label={'login'} />
    </Box>
  );
};
