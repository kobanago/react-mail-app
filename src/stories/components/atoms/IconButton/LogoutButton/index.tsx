import LogoutIcon from '@mui/icons-material/Logout';

import { IconButton } from '../Base';

import { supabase } from '@/supabaseClinet';

export const LogoutButton = () => {
  const logoutHandler = () => {
    supabase.auth
      .signOut()
      .then()
      .catch((error) => {
        alert('エラーが発生しました');
        console.error('Error logout:', error);
        return null;
      });
  };
  return (
    <IconButton icon={<LogoutIcon />} clickHandler={logoutHandler} label={'logout'} />
  );
};
