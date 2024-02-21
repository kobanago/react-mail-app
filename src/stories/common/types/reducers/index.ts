export type ResetSendStateActionType = {
  sendState: number;
  resetTextValue: string | undefined;
};
export type SelectPersonType = {
  personName: string;
  personMail: string;
};
export type FormClearState = {
  clearFlg: boolean;
  dispatch: React.Dispatch<boolean>;
};
export type ProcessFlgType = {
  addFlg: boolean;
  editFlg: boolean;
  removeFlg: boolean;
};
export type SetProcessFlgActionType = {
  type: string;
  payload: boolean;
};
export type SetProcessFlgType = {
  processFlg: ProcessFlgType;
  setProcessFlg: (action: SetProcessFlgActionType) => void;
};
