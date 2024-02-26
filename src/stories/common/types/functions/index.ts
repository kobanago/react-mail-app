import { OriginalUserDataType, UserDataType } from '../db';

export type useSelectPersonHandlerType = {
  setSelectEventFlg: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ToCreateParsonDataType = {
  personId: string;
  userData: OriginalUserDataType | null | undefined;
  personData: OriginalUserDataType | UserDataType | undefined;
};
