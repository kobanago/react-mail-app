import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

import { IconButton } from '../Base';

import { supabase } from '@/supabaseClinet';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    supabase.auth
      .signOut()
      .then(() => navigate('/'))
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
