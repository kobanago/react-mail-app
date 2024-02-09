import { OriginalUserDataType, UserDataType } from '../types';

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
  payload: OriginalUserDataType | UserDataType | undefined;
};
export const setUserDataFunc = (
  state: OriginalUserDataType | UserDataType | undefined,
  action: SetUserDataType,
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
