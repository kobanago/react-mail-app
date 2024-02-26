import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useShallow } from 'zustand/react/shallow';

import { IconButton } from '../Base';

import { insertData } from '@/controllers';
import { MockFunc } from '@/stories/common/mocks';
import { useUserDataStore } from '@/stories/common/stores';
import { supabase } from '@/supabaseClinet';

export const RegisterButton = () => {
  const { setUserData } = useUserDataStore(
    useShallow((state) => ({
      setUserData: state.setUserData,
    })),
  );
  const { mockLoginUser } = MockFunc();

  const handleClickRegisterUser = () => {
    if (import.meta.env.STORYBOOK) {
      mockLoginUser('not auth');
      return;
    }
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
          setUserData(userMail).then(() => {
            alert(`authenticated ${newData.name} !!`);
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
