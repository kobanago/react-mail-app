import { OriginalUserDataType, UserDataType } from '../db';
import { ToCreateParsonDataType } from '../functions';

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
export type SetMessageType = {
  message: string;
  setMessage: (by: string) => void;
};
export type SetUserDataType = {
  userData: OriginalUserDataType | null | undefined;
  error: unknown;
  resetUserData: () => void;
  setUserData: (by: string) => Promise<void>;
};
export type SetPersonDataType = {
  personData: OriginalUserDataType | UserDataType | undefined;
  error: unknown;
  resetPersonData: () => void;
  setPersonData: (by: ToCreateParsonDataType) => Promise<void>;
};
export type SetPersonListType = {
  personList: UserDataType[] | undefined;
  error: unknown;
  resetPersonList: () => void;
  setPersonList: (
    userId: number,
    personList: OriginalUserDataType[] | UserDataType[] | undefined,
  ) => Promise<void>;
};
