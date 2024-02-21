import { Dispatch } from 'react';

export type ResetSendStateContextType = {
  sendState: number;
  resetTextValue: string | undefined;
  sendStateDispatch: Dispatch<string>;
};
