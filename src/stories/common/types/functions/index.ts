import { SetProcessFlgType } from '../reducers';

export type useSelectPersonHandlerType = {
  processFlg: SetProcessFlgType;
  setSelectEventFlg: React.Dispatch<React.SetStateAction<boolean>>;
};
