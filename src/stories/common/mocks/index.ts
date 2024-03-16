import { switchDataState } from '../decorators/functions';
import { useDataStoreHooks } from '../stores/hooks';

import { supabase } from '@/supabaseClinet';

export const MockFunc = () => {
  const {
    setUserData,
    resetUserData,
    resetPersonData,
    setPersonList,
    resetPersonList,
    setSendState,
  } = useDataStoreHooks();
  const mockLoginUser = (state: string) => {
    supabase.auth
      .getUser()
      .then((result) => {
        if (!result || !result.data || !result.data.user) return;
        if (result.error) {
          alert('error occured!');
          console.error('Error Update data:', result.error);
          return;
        }
        switchDataState(
          setUserData,
          resetUserData,
          resetPersonData,
          setPersonList,
          resetPersonList,
          setSendState,
          state,
        )
          .then()
          .catch((error) => console.error('Error Update data:', error));
      })
      .catch((error) => console.error('MockError: ', error));
  };
  return { mockLoginUser };
};
