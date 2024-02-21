import { Dispatch } from 'react';

import { UserDataType } from '../db';
import {
  SetPersonListType,
  SetProcessFlgType,
  SetProcessFlgActionType,
} from '../reducers';

export type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  sendStateDispatch: Dispatch<string>;
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
