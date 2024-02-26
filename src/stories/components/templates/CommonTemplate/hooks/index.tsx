import { useCallback } from 'react';

import { GetComponentProps } from '../types';

import { EditPersonMainParts } from '@/stories/components/organisms/Main/EditPersonMainParts';
import { LoginMainParts } from '@/stories/components/organisms/Main/LoginMainParts';
import { SendMainParts } from '@/stories/components/organisms/Main/SendMainParts';

export const useCommonFunction = (title: string) => {
  const getComponent = useCallback(
    (title: string): GetComponentProps => {
      let data = { title: 'Address Book', padding: 6, component: <LoginMainParts /> };
      switch (title) {
        case 'LOGIN':
          break;
        case 'MESSAGE':
          data = { title: 'Edit Message', padding: 0.5, component: <SendMainParts /> };
          break;
        case 'PERSON':
          data = {
            title: 'Edit Person',
            padding: 0.5,
            component: <EditPersonMainParts />,
          };
          break;
        default:
          break;
      }
      return data;
    },
    [title],
  );
  const data = getComponent(title);
  return data;
};
