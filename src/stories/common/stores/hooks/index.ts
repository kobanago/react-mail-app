import { useShallow } from 'zustand/react/shallow';

import {
  useUserDataStore,
  usePersonDataStore,
  usePersonListStore,
  useSendStateStore,
} from '..';

export const useDataStoreHooks = () => {
  const { setUserData, resetUserData } = useUserDataStore(
    useShallow((state) => ({
      setUserData: state.setUserData,
      resetUserData: state.resetUserData,
    })),
  );
  const { resetPersonData } = usePersonDataStore(
    useShallow((state) => ({
      resetPersonData: state.resetPersonData,
    })),
  );
  const { setPersonList, resetPersonList } = usePersonListStore(
    useShallow((state) => ({
      setPersonList: state.setPersonList,
      resetPersonList: state.resetPersonList,
    })),
  );
  const { setSendState } = useSendStateStore(
    useShallow((state) => ({
      setSendState: state.setSendState,
    })),
  );

  return {
    setUserData,
    resetUserData,
    resetPersonData,
    setPersonList,
    resetPersonList,
    setSendState,
  };
};
