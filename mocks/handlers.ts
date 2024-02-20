import { http, HttpResponse } from 'msw';

import addressList from '../src/common/samples/data/addressList.json';
import messageList from '../src/common/samples/data/messageList.json';
import user from '../src/common/samples/data/users.json';

import {
  AddressListType,
  MessageType,
  OriginalUserDataType,
} from '@/stories/common/types/db';
const usersData = user as OriginalUserDataType[];
const addressListData = addressList as AddressListType[];
const messageListData = messageList as MessageType[];

export const handlers = [
  http.get('/rest/v1/users', ({ request }) => {
    const urlSearchParams = new URLSearchParams(request.url.split('?')[1]);
    const user_id = urlSearchParams.get('id');
    const user_mail = urlSearchParams.get('mail');
    if (user_id) {
      const parsed_user_id = parseInt(user_id.slice(3));
      const filteredData = usersData.filter((item) => item.id === parsed_user_id);
      return HttpResponse.json(filteredData);
    }
    if (user_mail) {
      const parsed_user_mail = user_mail.slice(3);
      const filteredData = usersData.filter((item) => item.mail === parsed_user_mail);
      return HttpResponse.json(filteredData);
    }
  }),

  http.get('/rest/v1/address_list', ({ request }) => {
    const urlSearchParams = new URLSearchParams(request.url.split('?')[1]);
    const user_id = urlSearchParams.get('user_id');
    const person_id = urlSearchParams.get('person_id');
    if (user_id && person_id) {
      const parsed_user_id = parseInt(user_id.slice(3));
      const parsed_person_id = parseInt(person_id.slice(3));
      const filteredData = addressListData.filter(
        (item) => item.user_id === parsed_user_id && item.person_id === parsed_person_id,
      );
      return HttpResponse.json(filteredData);
    }
    if (user_id && !person_id) {
      const parsed_user_id = parseInt(user_id.slice(3));
      const filteredData = addressListData.filter(
        (item) => item.user_id === parsed_user_id,
      );
      return HttpResponse.json(filteredData);
    }
  }),

  http.get('/rest/v1/message_list', ({ request }) => {
    const urlSearchParams = new URLSearchParams(request.url.split('?')[1]);
    const address_list_id = urlSearchParams.get('address_list_id');
    if (address_list_id) {
      const input = 'in.(1)';
      const match = input.match(/\d+/);
      const parsed_address_list_id = match ? parseInt(match[0]) : null;
      const filteredData = messageListData.filter(
        (item) => item.address_list_id === parsed_address_list_id,
      );
      return HttpResponse.json(filteredData);
    }
  }),

  http.patch('/rest/v1/*', () => {
    console.log('データ編集禁止');
    return HttpResponse.json({ error: 'Not Edit Data' });
  }),

  http.delete('/rest/v1/*', () => {
    console.log('データ編集禁止');
    return HttpResponse.json({ error: 'Not Edit Data' });
  }),

  http.post('/rest/v1/*', () => {
    console.log('データ編集禁止');
    return HttpResponse.json({ error: 'Not Edit Data' });
  }),

  http.get('/auth/v1/*', () => {
    console.log('認証禁止');
    return HttpResponse.json({ error: 'Not Auth' });
  }),
];
