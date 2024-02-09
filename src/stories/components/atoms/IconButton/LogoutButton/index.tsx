import LogoutIcon from '@mui/icons-material/Logout';
import { FC } from 'react';

import { IconButton, IconButtonProps } from '../Base';

export type LogoutButtonProps = IconButtonProps & {
  logoutHandler?: () => void;
};
export const LogoutButton: FC<LogoutButtonProps> = ({
  logoutHandler,
}: LogoutButtonProps) => {
  return (
    <IconButton icon={<LogoutIcon />} clickHandler={logoutHandler} label={'logout'} />
  );
};
