import { OriginalUserDataType } from '../db';

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
export type SetUserDataType = {
  userData: OriginalUserDataType | null | undefined;
  error: unknown;
  resetUserData: () => void;
  setUserData: (by: string) => Promise<void>;
};
