export type UserDataType = {
  id: string;
  name: string;
  mail: string;
  addressList: AddressListType;
};

export type AddressListType = {
  [key: string]: {
    id: string;
    name: string;
    mail: string;
    userId: string;
    message: MessageType;
  };
};

export type MessageType = {
  to: MessageContentsType[];
  from: MessageContentsType[];
};

export type MessageContentsType = {
  to: string;
  from: string;
  time: string;
  sortTime: number;
  comment: string;
  sendId: string;
};
