import { Dispatch, createContext } from 'react';

import { SetPersonListType, SetUserDataType } from '../reducers';
import { UserDataType } from '../types';

export type ValidateResultType = (newState: boolean) => void;
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

type SetPersonDataContextType = {
  personData: UserDataType | undefined;
  personDataDispatch: Dispatch<SetUserDataType>;
};
export const SetPersonDataContext = createContext<SetPersonDataContextType | undefined>(
  undefined,
);

type SetUserDataContextType = {
  userData: UserDataType | undefined;
  userDataDispatch: Dispatch<SetUserDataType>;
};
export const SetUserDataContext = createContext<SetUserDataContextType | undefined>(
  undefined,
);

type SetPersonListContextType = {
  personList: UserDataType[] | undefined;
  personListDispatch: Dispatch<SetPersonListType>;
};
export const SetPersonListContext = createContext<SetPersonListContextType | undefined>(
  undefined,
);
