import LogoutIcon from '@mui/icons-material/Logout';

import { IconButton } from '../Base';

import { supabase } from '@/supabaseClinet';

export const LogoutButton = () => {
  const logoutHandler = () => {
    supabase.auth
      .signOut()
      .then()
      .catch((error: Error) => {
        alert('error occured!' + error.message);
        console.error('Error logout:', error);
        return null;
      });
  };
  return (
    <IconButton icon={<LogoutIcon />} clickHandler={logoutHandler} label={'logout'} />
  );
};
