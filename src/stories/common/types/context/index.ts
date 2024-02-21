import { Dispatch } from 'react';

import { OriginalUserDataType, UserDataType } from '../db';
import {
  SetPersonDataType,
  SetPersonListType,
  SetProcessFlgType,
  SetProcessFlgActionType,
} from '../reducers';

export type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  sendStateDispatch: Dispatch<string>;
};
export type SetPersonDataContextType = {
  personData: OriginalUserDataType | UserDataType | undefined;
  personDataDispatch: Dispatch<SetPersonDataType> | undefined;
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
