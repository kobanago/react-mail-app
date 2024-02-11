import { OriginalUserDataType, UserDataType } from '../types/db';

export type ResetSendStateActionType = {
  sendState: number;
  resetTextValue: string | undefined;
};

export const resetSendStateFunc = (
  state: ResetSendStateActionType,
  action: string,
): ResetSendStateActionType => {
  switch (action) {
    case 'INIT':
      return { sendState: 0, resetTextValue: undefined };
    case 'KEEP':
      return { sendState: 1, resetTextValue: undefined };
    case 'COMPLETED':
      return { sendState: 2, resetTextValue: '' };
    default:
      return state;
  }
};

export type SetUserDataType = {
  type: string;
  payload: OriginalUserDataType | null | undefined;
};
export const setUserDataFunc = (
  state: OriginalUserDataType | null | undefined,
  action: SetUserDataType,
): OriginalUserDataType | null | undefined => {
  switch (action.type) {
    case 'SUCCESS':
      return action.payload;
    case 'ERROR':
      return undefined;
    case 'RESET':
      return undefined;
    default:
      return state;
  }
};

export type SetPersonDataType = {
  type: string;
  payload: OriginalUserDataType | UserDataType | undefined;
};
export const setPersonDataFunc = (
  state: OriginalUserDataType | UserDataType | undefined,
  action: SetPersonDataType,
): OriginalUserDataType | UserDataType | undefined => {
  switch (action.type) {
    case 'SUCCESS':
      return action.payload;
    case 'ERROR':
      return undefined;
    case 'RESET':
      return undefined;
    default:
      return state;
  }
};

export type SetPersonListType = {
  type: string;
  payload: UserDataType[] | undefined;
};
export const setPersonListFunc = (
  state: UserDataType[] | undefined,
  action: SetPersonListType,
): UserDataType[] | undefined => {
  switch (action.type) {
    case 'SUCCESS':
      return action.payload;
    case 'ERROR':
      return undefined;
    case 'RESET':
      return undefined;
    default:
      return state;
  }
};

export type SelectPersonType = {
  personName: string;
  personMail: string;
};
export const selectPersonReducer = (
  state: SelectPersonType,
  action: Partial<SelectPersonType>,
): SelectPersonType => {
  return { ...state, ...action };
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

export const setProcessFlgReducer = (
  state: SetProcessFlgType,
  action: SetProcessFlgActionType,
) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, addProcessingFlg: action.payload };
    case 'EDIT':
      return { ...state, editProcessingFlg: action.payload };
    case 'REMOVE':
      return { ...state, removeProcessingFlg: action.payload };
    default:
      return state;
  }
};

export type SetLinkClickFlgType = {
  listClickFlg: boolean;
  setListClickFlg: React.Dispatch<boolean>;
};
