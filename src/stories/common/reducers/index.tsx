import {
  ProcessFlgType,
  SetSendStateActionType,
  SetProcessFlgActionType,
} from '../types/reducers';
export const setSendStateFunc = (
  state: SetSendStateActionType,
  action: string,
): SetSendStateActionType => {
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
export const setProcessFlgReducer = (
  state: ProcessFlgType,
  action: SetProcessFlgActionType,
): ProcessFlgType => {
  switch (action.type) {
    case 'ADD':
      return { ...state, addFlg: action.payload };
    case 'EDIT':
      return { ...state, editFlg: action.payload };
    case 'REMOVE':
      return { ...state, removeFlg: action.payload };
    default:
      return state;
  }
};
