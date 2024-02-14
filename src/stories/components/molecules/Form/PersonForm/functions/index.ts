import {
  deleteData,
  getAddressList,
  getAddressListId,
  getMessageList,
  getTargetData,
  insertData,
  updateData,
} from '@/controllers';
import { OriginalUserDataType } from '@/stories/common/types/db';

type processResultType = {
  state: string;
  userData: OriginalUserDataType;
  personData: OriginalUserDataType | undefined;
  personName: string;
  personMail: string;
};
export const processResultFunc = async ({
  state,
  userData,
  personData,
  personName,
  personMail,
}: processResultType): Promise<number> => {
  const table = 'address_list';
  const button = state.replace(' END?', '');
  switch (button) {
    case 'ADD':
      return await addPersonFunc(table, userData, personName, personMail);
    case 'EDIT':
      if (!personData) throw new Error('something wrong');
      return await editPersonFunc(table, userData, personData, personName);
    case 'REMOVE':
      if (!personData) throw new Error('something wrong');
      return await deletePersonFunc(table, userData, personData);
    default:
      throw new Error('something wrong');
  }
};

const addPersonFunc = async (
  table: string,
  userData: OriginalUserDataType,
  personName: string,
  personMail: string,
): Promise<number> => {
  const targetUser = (await getTargetData(
    'users',
    'mail',
    personMail,
  )) as OriginalUserDataType[];
  if (!targetUser || !targetUser.length)
    throw new Error('confirm register mail (no exist this mail) ');
  const redisterdUser = (await getAddressList(
    userData.id,
    targetUser[0].id,
  )) as OriginalUserDataType[];
  if (userData.mail === personMail)
    throw new Error('confirm register mail (your mail address) ');
  if (redisterdUser && redisterdUser.length)
    throw new Error('confirm register mail (already registerd) ');
  const newData = {
    user_id: userData.id,
    person_id: targetUser[0].id,
    uuid: userData.uuid,
    person_display_name: personName ? personName : targetUser[0].name,
  };
  return await insertData(table, newData);
};

const editPersonFunc = async (
  table: string,
  userData: OriginalUserDataType,
  personData: OriginalUserDataType,
  personName: string,
): Promise<number> => {
  const newData = {
    uuid: userData.uuid,
    person_id: personData.id,
    person_display_name: personName,
  };
  return await updateData(table, newData);
};

const deleteMessageList = async (
  userData: OriginalUserDataType,
  personData: OriginalUserDataType,
): Promise<number> => {
  const messageList = await getMessageList(userData.id, personData.id);
  if (!messageList || !messageList.length) return 0;
  const addressListId = await getAddressListId(userData.id, personData.id);
  const delMessageData = { uuid: userData.uuid, address_list_id: addressListId };
  return await deleteData('message_list', delMessageData);
};

const deletePersonFunc = async (
  table: string,
  userData: OriginalUserDataType,
  personData: OriginalUserDataType,
): Promise<number> => {
  const delData = { uuid: userData.uuid, person_id: personData.id };
  const status = await deleteMessageList(userData, personData);
  if ((status !== 0 && status < 200) || status >= 300) throw new Error('something wrong');
  return await deleteData(table, delData);
};
