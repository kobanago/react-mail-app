import { OriginalUserDataType, UserDataType, AddressListType } from '../types/db';
import { ToCreateParsonDataType } from '../types/functions';

import { getAddressList, getTargetData, getUsersList } from '@/controllers';

const changeNamePersonList = async (
  userId: number,
  personList: OriginalUserDataType[],
): Promise<UserDataType[]> => {
  const updatedList = await Promise.all(
    personList.map(async (item) => {
      try {
        const result = (await getAddressList(userId, item.id)) as AddressListType[];
        if (!result) return;
        const data = Array.isArray(result) ? result[0] : (result as AddressListType);
        if (!data) return;
        const displayName = data.person_display_name
          ? data.person_display_name
          : item.name;
        return {
          ...item,
          person_display_name: displayName,
        };
      } catch (error) {
        console.error('Error creating personList:', error);
        throw error;
      }
    }),
  );
  return updatedList as UserDataType[];
};

export const createPersonList = async (
  userId: number,
  personList: OriginalUserDataType[] | UserDataType[] | undefined,
): Promise<UserDataType[]> => {
  try {
    let newList: UserDataType[] = [];
    if (!personList || Object.keys(personList[0]).length === 4) {
      let data = personList && (personList as OriginalUserDataType[]);
      if (!data) {
        data = await getUsersList(userId);
      }
      if (!data) throw new Error('something wrong');
      newList = await changeNamePersonList(userId, data);
    } else {
      const result = await getUsersList(userId);
      if (!result || !result.length) return [];
      const oldData = personList as UserDataType[];
      const newData = await changeNamePersonList(userId, result);
      if (oldData.length === newData.length) {
        const diff = oldData.filter((oldItem) => {
          return newData.some(
            (newItem) =>
              oldItem.id === newItem.id &&
              oldItem.person_display_name !== newItem.person_display_name,
          );
        });
        if (diff.length) newList = newData;
      } else {
        newList = newData;
      }
    }
    return newList;
  } catch (error) {
    console.error('Error creating personList:', error);
    throw error;
  }
};

const changeNamePersonData = async (
  userId: number,
  personData: OriginalUserDataType | UserDataType,
): Promise<UserDataType> => {
  try {
    let newData = undefined;
    const result = (await getAddressList(userId, personData.id)) as AddressListType[];
    if (!result) throw new Error('something wrong');
    const data = Array.isArray(result) ? result[0] : (result as AddressListType);
    if (!data) throw new Error('something wrong');
    newData = {
      ...personData,
      person_display_name: data.person_display_name ?? '',
    };
    return newData as UserDataType;
  } catch (error) {
    console.error('Error creating personData:', error);
    throw error;
  }
};

const createPersonData = async (
  userId: number,
  personMail: string,
  personData: OriginalUserDataType | UserDataType | undefined,
): Promise<UserDataType> => {
  try {
    let newData = undefined;
    if (!personData || Object.keys(personData).length === 4) {
      let data = personData && (personData as OriginalUserDataType);
      if (!data) {
        const tmpData = (await getTargetData(
          'users',
          'mail',
          personMail,
        )) as OriginalUserDataType[];
        if (!tmpData || !tmpData.length) throw new Error('something wrong');
        data = tmpData[0];
      }
      if (!data) throw new Error('something wrong');
      newData = await changeNamePersonData(userId, data);
    } else {
      const oldData = personData as UserDataType;
      const result = await changeNamePersonData(userId, oldData);
      if (result && JSON.stringify(result) === JSON.stringify(oldData))
        throw new Error('something wrong');
      newData = result;
    }
    return newData;
  } catch (error) {
    console.error('Error creating personData:', error);
    throw error;
  }
};

export const setDataToCreateParsonData = async ({
  personId,
  userData,
  personData,
}: ToCreateParsonDataType): Promise<UserDataType> => {
  try {
    let newData = undefined;
    let data = personData;
    if (!userData) throw new Error('something wrong');
    if (!data) {
      const personData = await getTargetData('users', 'id', personId.toString());
      if (!personData) throw new Error('something wrong');
      const tmpData = personData as UserDataType[];
      if (!tmpData.length) throw new Error('something wrong');
      data = tmpData[0];
    }
    newData = await createPersonData(userData.id, data.mail, data);
    if (!newData) throw new Error('something wrong');
    return newData;
  } catch (error) {
    console.error('Error creating personData:', error);
    throw error;
  }
};
