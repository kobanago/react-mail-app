import { createContext } from 'react';

import {
  ResetSendStateContextType,
  SetProcessFlgContextType,
  SetMessageContextType,
} from '../types/context';

export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);
export const SetProcessFlgContext = createContext<SetProcessFlgContextType | undefined>(
  undefined,
);
export const SetMessageContext = createContext<SetMessageContextType | undefined>(
  undefined,
);
