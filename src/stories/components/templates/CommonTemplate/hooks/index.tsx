import { CommonTemplateProps } from '..';

import { EditPersonMainParts } from '@/stories/components/organisms/Main/EditPersonMainParts';
import { LoginMainParts } from '@/stories/components/organisms/Main/LoginMainParts';
import { SendMainParts } from '@/stories/components/organisms/Main/SendMainParts';

export const useCommonFunction = (title: string) => {
  type GetComponentProps = CommonTemplateProps & {
    padding: number;
    component: React.ReactNode;
  };
  const getComponent = (title: string): GetComponentProps => {
    let data = { title: 'Address Book', padding: 6, component: <LoginMainParts /> };
    switch (title) {
      case 'LOGIN':
        break;
      case 'MESSAGE':
        data = { title: 'Edit Message', padding: 0.5, component: <SendMainParts /> };
        break;
      case 'PERSON':
        data = { title: 'Edit Person', padding: 0.5, component: <EditPersonMainParts /> };
        break;
      default:
        break;
    }
    return data;
  };
  const data = getComponent(title);
  return data;
};
