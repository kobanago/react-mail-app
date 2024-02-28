import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { switchDataState } from './functions';
import { useDataStoreHooks } from '../stores/hooks';

export const createDecorator = () => {
  const createCommonDecorator = (state: string) => {
    const BasicDecorator = (Story: ComponentType) => {
      const {
        setUserData,
        resetUserData,
        resetPersonData,
        setPersonList,
        resetPersonList,
        setSendState,
      } = useDataStoreHooks();
      switchDataState(
        setUserData,
        resetUserData,
        resetPersonData,
        setPersonList,
        resetPersonList,
        setSendState,
        state,
      )
        .then()
        .catch((error) => console.error('Error Update data:', error));
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    };
    return BasicDecorator;
  };
  return { createCommonDecorator };
};
