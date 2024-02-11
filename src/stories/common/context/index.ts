import { createContext } from 'react';

import { SetLinkClickFlgType } from '../reducers';
import {
  ValidateResultType,
  InitChangeEventStateType,
  InitInputEventStateType,
  ResetSendStateContextType,
  SetPersonDataContextType,
  SetUserDataContextType,
  SetPersonListContextType,
  SetProcessFlgContextType,
  SetMessageContextType,
} from '../types/context';

export const ValidateResultContext = createContext<ValidateResultType | undefined>(
  undefined,
);
export const InitChangeEventStateContext = createContext<
  InitChangeEventStateType | undefined
>(undefined);
export const InitInputEventStateContext = createContext<
  InitInputEventStateType | undefined
>(undefined);
export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);
export const SetPersonDataContext = createContext<SetPersonDataContextType | undefined>(
  undefined,
);
export const SetUserDataContext = createContext<
  SetUserDataContextType | null | undefined
>(undefined);
export const SetPersonListContext = createContext<SetPersonListContextType | undefined>(
  undefined,
);
export const SetProcessFlgContext = createContext<SetProcessFlgContextType | undefined>(
  undefined,
);
export const SetMessageContext = createContext<SetMessageContextType | undefined>(
  undefined,
);
export const SetLinkClickFlgContext = createContext<SetLinkClickFlgType | undefined>(
  undefined,
);
