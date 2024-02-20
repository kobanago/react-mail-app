import { OriginalUserDataType, UserDataType } from '../db';

export type ResetSendStateActionType = {
  sendState: number;
  resetTextValue: string | undefined;
};
export type SetUserDataType = {
  type: string;
  payload: OriginalUserDataType | null | undefined;
};
export type SetPersonDataType = {
  type: string;
  payload: OriginalUserDataType | UserDataType | undefined;
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
