import { UserDataType } from '../types/db';
import {
  ResetSendStateActionType,
  SetPersonListType,
  SelectPersonType,
  SetProcessFlgType,
  SetProcessFlgActionType,
} from '../types/reducers';
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
export const selectPersonReducer = (
  state: SelectPersonType,
  action: Partial<SelectPersonType>,
): SelectPersonType => {
  return { ...state, ...action };
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
