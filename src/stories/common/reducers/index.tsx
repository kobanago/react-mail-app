import { Dispatch } from 'react';

export type ResetSendStateType = {
  sendState: number;
  resetTextValue: string | undefined;
};

export type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  dispatch: Dispatch<string>;
};

export const resetSendStateFunc = (
  state: ResetSendStateType,
  action: string,
): ResetSendStateType => {
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
