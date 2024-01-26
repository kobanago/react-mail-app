import { Dispatch } from 'react';

export type ResetSendStateType = {
  sendState: number;
  textValue: string | undefined;
};

export type ResetSendStateContextType = {
  sendState: number;
  textValue: string | undefined;
  dispatch: Dispatch<string>;
};

export const resetSendStateFunc = (
  state: ResetSendStateType,
  action: string,
): ResetSendStateType => {
  switch (action) {
    case 'INIT':
      return { sendState: 0, textValue: undefined };
    case 'KEEP':
      return { sendState: 1, textValue: undefined };
    case 'COMPLETED':
      return { sendState: 2, textValue: '' };
    default:
      return state;
  }
};
