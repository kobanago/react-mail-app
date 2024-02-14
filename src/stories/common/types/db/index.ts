export type OriginalUserDataType = {
  id: number;
  name: string;
  mail: string;
  uuid: string;
};
export type UserDataType = OriginalUserDataType & {
  person_display_name: string;
};

export type AddressListType = {
  id: number;
  user_id: number;
  person_id: number;
  uuid: string;
  person_display_name: string;
};

export type MessageType = {
  id?: number;
  address_list_id: number;
  to_user: string;
  from_user: string;
  time: string;
  sort_time: number;
  comment: string;
  send_id: number;
  uuid: string;
};

export type DataType = OriginalUserDataType | AddressListType | MessageType;

export type UpdateDataType =
  | ({
      [key: string]: string;
    } & {
      [key: string]: number | string;
    })
  | {
      [key: string]: number | string;
    };
