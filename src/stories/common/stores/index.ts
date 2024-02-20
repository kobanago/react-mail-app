import { create } from 'zustand';

import { InitChangeEventType, LinkClickFlgType } from '../types/stores';

export const useLinkClickFlgStore = create<LinkClickFlgType>()((set) => ({
  listClickFlg: false,
  setListClickFlg: (by) => set({ listClickFlg: by }),
}));
export const useInitChangeEventStore = create<InitChangeEventType>()((set) => ({
  initialChangeOccurred: false,
  initialInputOccurred: false,
  setInitialChangeOccurred: (by) => set({ initialChangeOccurred: by }),
  setInitialInputOccurred: (by) => set({ initialInputOccurred: by }),
}));
