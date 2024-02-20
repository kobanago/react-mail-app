import { create } from 'zustand';

import { LinkClickFlgType } from '../types/stores';

export const useLinkClickFlgStore = create<LinkClickFlgType>()((set) => ({
  listClickFlg: false,
  setListClickFlg: (by) => set({ listClickFlg: by }),
}));
