export type LinkClickFlgType = {
  listClickFlg: boolean;
  setListClickFlg: (by: boolean) => void;
};
export type ValidateResultType = {
  validateError: boolean;
  setValidateError: (by: boolean) => void;
};
export type InitChangeEventType = {
  initialChangeOccurred: boolean;
  initialInputOccurred: boolean;
  setInitialChangeOccurred: (by: boolean) => void;
  setInitialInputOccurred: (by: boolean) => void;
};
