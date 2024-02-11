import { Dispatch, createContext } from 'react';

import {
  SetLinkClickFlgType,
  SetPersonDataType,
  SetPersonListType,
  SetProcessFlgActionType,
  SetProcessFlgType,
  SetUserDataType,
} from '../reducers';
import { OriginalUserDataType, UserDataType } from '../types';

export type ValidateResultType = {
  validateError: boolean;
  setValidateError: React.Dispatch<boolean>;
};
export const ValidateResultContext = createContext<ValidateResultType | undefined>(
  undefined,
);

export type InitChangeEventStateType = {
  initialChangeOccurred: boolean;
  setInitialChangeOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export const InitChangeEventStateContext = createContext<
  InitChangeEventStateType | undefined
>(undefined);
export type InitInputEventStateType = {
  initialInputOccurred: boolean;
  setInitialInputOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export const InitInputEventStateContext = createContext<
  InitInputEventStateType | undefined
>(undefined);

type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  sendStateDispatch: Dispatch<string>;
};
export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);

export type SetPersonDataContextType = {
  personData: OriginalUserDataType | UserDataType | undefined;
  personDataDispatch: Dispatch<SetPersonDataType> | undefined;
};
export const SetPersonDataContext = createContext<SetPersonDataContextType | undefined>(
  undefined,
);

type SetUserDataContextType = {
  userData: OriginalUserDataType | null | undefined;
  userDataDispatch: Dispatch<SetUserDataType>;
};
export const SetUserDataContext = createContext<
  SetUserDataContextType | null | undefined
>(undefined);

type SetPersonListContextType = {
  personList: UserDataType[] | undefined;
  personListDispatch: Dispatch<SetPersonListType>;
};
export const SetPersonListContext = createContext<SetPersonListContextType | undefined>(
  undefined,
);

type SetProcessFlgContextType = {
  processFlg: SetProcessFlgType;
  processFlgDispatch: Dispatch<SetProcessFlgActionType>;
};
export const SetProcessFlgContext = createContext<SetProcessFlgContextType | undefined>(
  undefined,
);

type SetMessageContextType = {
  message: string;
  messageDispatch: Dispatch<string>;
};
export const SetMessageContext = createContext<SetMessageContextType | undefined>(
  undefined,
);

export const SetLinkClickFlgContext = createContext<SetLinkClickFlgType | undefined>(
  undefined,
);
