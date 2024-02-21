export type SetSendStateActionType = {
  sendState: number;
  resetTextValue: string | undefined;
};
export type SetSendStateType = {
  sendState: number;
  resetTextValue: string | undefined;
  setSendState: (action: string) => void;
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
