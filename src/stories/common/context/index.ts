import { createContext } from 'react';

import { ResetSendStateContextType } from '../types/context';

export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);
