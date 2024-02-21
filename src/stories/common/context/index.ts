import { createContext } from 'react';

import {
  ResetSendStateContextType,
  SetPersonDataContextType,
  SetPersonListContextType,
  SetProcessFlgContextType,
  SetMessageContextType,
} from '../types/context';

export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);
export const SetPersonDataContext = createContext<SetPersonDataContextType | undefined>(
  undefined,
);
export const SetPersonListContext = createContext<SetPersonListContextType | undefined>(
  undefined,
);
export const SetProcessFlgContext = createContext<SetProcessFlgContextType | undefined>(
  undefined,
);
export const SetMessageContext = createContext<SetMessageContextType | undefined>(
  undefined,
);
