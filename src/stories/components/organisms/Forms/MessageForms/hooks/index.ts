import { useCallback, useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { getAddressList, getAddressListId } from '@/controllers';
import { usePersonDataStore, useUserDataStore } from '@/stories/common/stores';
import { AddressListType, MessageType, UserDataType } from '@/stories/common/types/db';

export const useMessageFormsFunctions = (sendState: number, message: string) => {
  const { userData } = useUserDataStore(
    useShallow((state) => ({ userData: state.userData })),
  );
  const { personData } = usePersonDataStore(
    useShallow((state) => ({
      personData: state.personData,
    })),
  );
  const [messageUserData, setMessageUserData] = useState<MessageType | null>(null);
  const [messagePersonData, setMessagePersonData] = useState<MessageType | null>(null);

  useEffect(() => {
    (async () => {
      if (sendState !== 1 || !message || !personData) return;
      await fetchData();
    })();
  }, [sendState]);

  const fetchData = useCallback(async () => {
    if (!userData || !personData) return;
    const { person_display_name } = personData as UserDataType;
    try {
      const userMessageData = await createData(false, person_display_name);
      userMessageData && setMessageUserData(userMessageData);

      const personAddressList = (await getAddressList(
        personData.id,
        userData.id,
      )) as AddressListType[];
      if (!personAddressList || !personAddressList.length) return;

      const displayName = personAddressList[0].person_display_name;
      const personMessageData = await createData(true, displayName);
      personMessageData && setMessagePersonData(personMessageData);
    } catch (error) {
      console.error('Error message_list update:', error);
      alert('error occured!');
    }
  }, [personData, sendState]);

  const createData = useCallback(
    async (personFlg: boolean, personDisplayName: string) => {
      try {
        if (!userData || !personData) return;
        const userId = !personFlg ? userData.id : personData.id;
        const personId = !personFlg ? personData.id : userData.id;
        const userUuid = !personFlg ? userData.uuid : personData.uuid;
        const addressListId = await getAddressListId(userId, personId);
        if (!addressListId) return;
        const userMessageData = setData(
          personFlg,
          addressListId,
          personDisplayName,
          userUuid,
        );
        return userMessageData;
      } catch (error) {
        console.error('Error message_list update:', error);
        alert('error occured!');
      }
    },
    [personData, message],
  );

  const setData = useCallback(
    (
      personFlg: boolean,
      addressListId: number,
      displayName: string,
      uuid: string,
    ): MessageType | undefined => {
      if (!userData || !personData || !message || !addressListId) return;
      const toName = !personFlg
        ? displayName
          ? displayName
          : personData.name
        : personData.name;
      const fromName = !personFlg ? userData.name : displayName;
      const time = new Date();
      const sort_time = time.getTime();
      const convert_time = time.toLocaleString();
      const data: MessageType = {
        address_list_id: addressListId,
        to_user: toName,
        from_user: fromName,
        time: convert_time,
        sort_time: sort_time,
        comment: message,
        send_id: userData.id,
        uuid: uuid,
      };
      return data;
    },
    [personData, message],
  );
  return { messageUserData, messagePersonData };
};
