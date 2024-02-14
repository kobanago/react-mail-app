import { supabase } from './supabaseClinet';

import {
  DataType,
  MessageType,
  OriginalUserDataType,
  UpdateDataType,
} from '@/stories/common/types/db';

export const getUsersList = async (userId: number): Promise<OriginalUserDataType[]> => {
  try {
    const { data: personIdData } = await supabase
      .from('address_list')
      .select('person_id')
      .eq('user_id', userId);
    if (!personIdData || !personIdData.length) return [];
    const { data: addressList } = await supabase
      .from('users')
      .select('*')
      .in(
        'id',
        personIdData.map((item) => item.person_id),
      );
    if (!addressList || !addressList.length) return [];
    return addressList;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getAddressListId = async (userId: number, personId: number) => {
  const { data: addressListId } = await supabase
    .from('address_list')
    .select('id')
    .eq('user_id', userId)
    .eq('person_id', personId);
  if (!addressListId) return 0;
  return addressListId[0].id as number;
};
export const getMessageList = async (
  userId: number,
  personId: number,
): Promise<MessageType[]> => {
  try {
    const userAddressListId = await getAddressListId(userId, personId);
    if (!userAddressListId) return [];
    const { data: messageList } = await supabase
      .from('message_list')
      .select('*')
      .in('address_list_id', [userAddressListId]);
    if (!messageList || !messageList.length) return [];
    return messageList;
  } catch (error) {
    console.error('Error fetching message list:', error);
    throw error;
  }
};

export const getAddressList = async (
  userId: number,
  personId: number,
): Promise<DataType[] | DataType> => {
  const { data, status, error } = await supabase
    .from('address_list')
    .select('*')
    .eq('user_id', userId)
    .eq('person_id', personId);
  if (error) {
    console.error('Error fetching data:', error, 'status', status);
    throw error;
  }
  return data as DataType[] | DataType;
};

export const getTargetData = async (
  table: string,
  key: string,
  value: string,
): Promise<DataType[] | DataType> => {
  const { data, status, error } = await supabase.from(table).select('*').eq(key, value);
  if (error) {
    console.error('Error fetching data:', error, 'status', status);
    throw error;
  }
  return data as DataType[] | DataType;
};

export const insertData = async (
  table: string,
  data: UpdateDataType,
): Promise<number> => {
  try {
    if (table === 'address_list') {
      const { status, error } = await supabase
        .from(table)
        .insert(data)
        .eq('uuid', data.uuid)
        .eq('person_id', data.person_id);
      if (error) throw new Error('something wrong' + error.message);
      return status;
    } else {
      const { status, error } = await supabase
        .from(table)
        .insert(data)
        .eq('uuid', data.uuid);
      if (error) throw new Error('something wrong' + error.message);
      return status;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateData = async (
  table: string,
  data: UpdateDataType,
): Promise<number> => {
  try {
    const { status, error } = await supabase
      .from(table)
      .update(data)
      .eq('uuid', data.uuid)
      .eq('person_id', data.person_id);
    if (error) throw new Error('something wrong' + error.message);
    return status;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const deleteData = async (
  table: string,
  data: UpdateDataType,
): Promise<number> => {
  try {
    if (table === 'address_list') {
      const { status, error } = await supabase
        .from(table)
        .delete()
        .eq('uuid', data.uuid)
        .eq('person_id', data.person_id);
      if (error) throw new Error('something wrong' + error.message);
      return status;
    } else {
      const { status, error } = await supabase
        .from(table)
        .delete()
        .eq('uuid', data.uuid)
        .in('address_list_id', [data.address_list_id]);
      if (error) throw new Error('something wrong' + error.message);
      return status;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
