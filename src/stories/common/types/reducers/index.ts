import { UserDataType } from '../db';

export type ResetSendStateActionType = {
  sendState: number;
  resetTextValue: string | undefined;
};
export type SetPersonListType = {
  type: string;
  payload: UserDataType[] | undefined;
};
export type SelectPersonType = {
  personName: string;
  personMail: string;
};
export type FormClearState = {
  clearFlg: boolean;
  dispatch: React.Dispatch<boolean>;
};
export type SetProcessFlgType = {
  addProcessingFlg: boolean;
  editProcessingFlg: boolean;
  removeProcessingFlg: boolean;
};
export type SetProcessFlgActionType = {
  type: string;
  payload: boolean;
};
