import { Dispatch } from 'react';

import {
  SetPersonDataType,
  SetPersonListType,
  SetProcessFlgActionType,
  SetProcessFlgType,
  SetUserDataType,
} from '../../reducers';
import { OriginalUserDataType, UserDataType } from '../db';

export type ValidateResultType = {
  validateError: boolean;
  setValidateError: React.Dispatch<boolean>;
};
export type InitChangeEventStateType = {
  initialChangeOccurred: boolean;
  setInitialChangeOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export type InitInputEventStateType = {
  initialInputOccurred: boolean;
  setInitialInputOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  sendStateDispatch: Dispatch<string>;
};
export type SetPersonDataContextType = {
  personData: OriginalUserDataType | UserDataType | undefined;
  personDataDispatch: Dispatch<SetPersonDataType> | undefined;
};
export type SetUserDataContextType = {
  userData: OriginalUserDataType | null | undefined;
  userDataDispatch: Dispatch<SetUserDataType>;
};
export type SetPersonListContextType = {
  personList: UserDataType[] | undefined;
  personListDispatch: Dispatch<SetPersonListType>;
};
export type SetProcessFlgContextType = {
  processFlg: SetProcessFlgType;
  processFlgDispatch: Dispatch<SetProcessFlgActionType>;
};
export type SetMessageContextType = {
  message: string;
  messageDispatch: Dispatch<string>;
};
