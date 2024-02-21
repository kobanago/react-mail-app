import { OriginalUserDataType, UserDataType } from '../db';
import { SetProcessFlgType } from '../reducers';

export type useSelectPersonHandlerType = {
  processFlg: SetProcessFlgType;
  setSelectEventFlg: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToCreateParsonDataType = {
  personId: string;
  userData: OriginalUserDataType | null | undefined;
  personData: OriginalUserDataType | UserDataType | undefined;
};
