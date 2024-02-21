import { create } from 'zustand';

import { OriginalUserDataType } from '../types/db';
import {
  InitChangeEventType,
  LinkClickFlgType,
  SetUserDataType,
  ValidateResultType,
} from '../types/stores';

import { getTargetData } from '@/controllers';

export const useLinkClickFlgStore = create<LinkClickFlgType>()((set) => ({
  listClickFlg: false,
  setListClickFlg: (by) => set({ listClickFlg: by }),
}));
export const useValidateResultStore = create<ValidateResultType>()((set) => ({
  validateError: false,
  setValidateError: (by) => set({ validateError: by }),
}));
export const useInitChangeEventStore = create<InitChangeEventType>()((set) => ({
  initialChangeOccurred: false,
  initialInputOccurred: false,
  setInitialChangeOccurred: (by) => set({ initialChangeOccurred: by }),
  setInitialInputOccurred: (by) => set({ initialInputOccurred: by }),
}));
export const useUserDataStore = create<SetUserDataType>()((set) => ({
  userData: undefined,
  error: null,
  resetUserData: () => set({ userData: undefined }),
  setUserData: async (userMail: string) => {
    try {
      const res = (await getTargetData(
        'users',
        'mail',
        userMail,
      )) as OriginalUserDataType[];
      const userData = res.length ? res[0] : null;
      set({ userData });
    } catch (error) {
      set({ error });
    }
  },
}));
