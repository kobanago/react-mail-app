import { OriginalUserDataType, UserDataType } from '../../types/db';

import user from '@/common/samples/data/users.json';

export const switchDataState = async (
  setUserData: (by: string) => Promise<void>,
  resetUserData: () => void,
  resetPersonData: () => void,
  setPersonList: (
    userId: number,
    personList: OriginalUserDataType[] | UserDataType[] | undefined,
  ) => Promise<void>,
  resetPersonList: () => void,
  state: string,
) => {
  switch (state) {
    case 'not login':
      resetUserData();
      resetPersonData();
      resetPersonList();
      return;
    case 'not auth':
      await setUserData('not auth');
      resetPersonData();
      resetPersonList();
      return;
    case 'not exist data':
      await setUserData(user[0].mail);
      resetPersonData();
      resetPersonList();
      return;
    case 'exist data':
      await setUserData(user[0].mail);
      resetPersonData();
      await setPersonList(user[0].id, user.slice(1, 4));
      return;
    case 'select data':
      await setUserData(user[0].mail);
      resetPersonData();
      await setPersonList(user[0].id, [user[1]]);
      return;
    default:
      resetUserData();
      resetPersonData();
      resetPersonList();
      return;
  }
};
