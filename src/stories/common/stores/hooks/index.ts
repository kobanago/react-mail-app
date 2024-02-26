import { useShallow } from 'zustand/react/shallow';

import { useUserDataStore, usePersonDataStore, usePersonListStore } from '..';

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

  return {
    setUserData,
    resetUserData,
    resetPersonData,
    setPersonList,
    resetPersonList,
  };
};
