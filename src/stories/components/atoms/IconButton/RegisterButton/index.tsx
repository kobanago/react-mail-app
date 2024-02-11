import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useContext } from 'react';

import { IconButton } from '../Base';

import { getTargetData, insertData } from '@/controllers';
import { SetUserDataContext } from '@/stories/common/context';
import { OriginalUserDataType } from '@/stories/common/types';
import { supabase } from '@/supabaseClinet';

export const RegisterButton = () => {
  const { userDataDispatch } = useContext(SetUserDataContext) ?? {};
  const handleClickRegisterUser = () => {
    supabase.auth.getUser().then((result) => {
      if (!result || !result.data || !result.data.user) return;
      if (result.error) {
        alert('error occured!');
        console.error('Error Update data:', result.error);
        return;
      }
      const {
        data: { user },
      } = result;
      const userMail = user.email as string;
      const newData = {
        name: user.identities?.[0]?.identity_data?.name as string,
        mail: userMail,
        uuid: user.id,
      };
      insertData('users', newData)
        .then(() => {
          getTargetData('users', 'mail', userMail).then((result) => {
            if (!result) return;
            const data = result as OriginalUserDataType[];
            if (!data.length) return;
            if (userDataDispatch) userDataDispatch({ type: 'SUCCESS', payload: data[0] });
          });
        })
        .catch((error: Error) => {
          alert('error occured!');
          console.error('Error Update data:', error);
        });
    });
  };

  return (
    <IconButton
      icon={<AppRegistrationIcon />}
      label={'register your account'}
      clickHandler={handleClickRegisterUser}
    />
  );
};
