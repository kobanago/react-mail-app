import { createContext } from 'react';

import { ResetSendStateContextType } from '../reducers';
export type ValidateResultType = (newState: boolean) => void;
export const ValidateResultContext = createContext<ValidateResultType | undefined>(
  undefined,
);
export type InitChangeEventStateType = {
  initialChangeOccurred: boolean;
  setInitialChangeOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export const InitChangeEventStateContext = createContext<
  InitChangeEventStateType | undefined
>(undefined);
export type InitInputEventStateType = {
  initialInputOccurred: boolean;
  setInitialInputOccurred: React.Dispatch<React.SetStateAction<boolean>>;
};
export const InitInputEventStateContext = createContext<
  InitInputEventStateType | undefined
>(undefined);

export type SelectedPersonIdType = (newState: string) => void;
export const SelectedPersonIdContext = createContext<SelectedPersonIdType | undefined>(
  undefined,
);

export const ResetSendStateContext = createContext<ResetSendStateContextType | undefined>(
  undefined,
);
