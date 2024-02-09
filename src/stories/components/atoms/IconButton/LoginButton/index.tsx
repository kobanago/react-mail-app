import LoginIcon from '@mui/icons-material/Login';

import { Box } from '../../Box/Basic';
import { IconButton } from '../Base';

import theme from '@/stories/common/theme';
import { supabase } from '@/supabaseClinet';

export const LoginButton = () => {
  const handleSignInWithGoogle = () => {
    supabase.auth
      .signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })
      .then()
      .catch((error: Error) => {
        alert('error occured!' + error.message);
        console.error('Error login:', error);
        return null;
      });
  };

  return (
    <Box marginTop={theme.spacing(2)} textAlign='center'>
      <IconButton
        icon={<LoginIcon />}
        clickHandler={handleSignInWithGoogle}
        label={'login'}
      />
    </Box>
  );
};
