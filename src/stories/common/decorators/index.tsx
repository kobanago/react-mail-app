import { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { OriginalUserDataType, UserDataType } from '../types/db';

import personList from '@/common/samples/data/personList.json';
import user from '@/common/samples/data/users.json';
import {
  SetPersonListContext,
  SetPersonDataContext,
  SetUserDataContext,
  ResetSendStateContext,
  SetLinkClickFlgContext,
  SetProcessFlgContext,
  ValidateResultContext,
} from '@/stories/common/context';
import {
  SetUserDataContextType,
  SetPersonListContextType,
  SetPersonDataContextType,
} from '@/stories/common/types/context';

const createMainData = (
  userData: SetUserDataContextType['userData'],
  personData: SetPersonDataContextType['personData'],
  personList: SetPersonListContextType['personList'],
) => {
  const userDataValue: SetUserDataContextType = {
    userData: userData,
    userDataDispatch: () => {},
  };
  const personDataValue: SetPersonDataContextType = {
    personData: personData,
    personDataDispatch: () => {},
  };
  const personListValue: SetPersonListContextType = {
    personList: personList,
    personListDispatch: () => {},
  };
  return { userDataValue, personDataValue, personListValue };
};

export const switchDataState = (state: string) => {
  const userData = user as OriginalUserDataType[];
  const personListData = personList as UserDataType[];

  switch (state) {
    case 'not login':
      return createMainData(undefined, undefined, []);
    case 'not auth':
      return createMainData(null, undefined, []);
    case 'not exist data':
      return createMainData(userData[0], undefined, []);
    case 'exist data':
      return createMainData(userData[0], personListData[1], [
        personListData[1],
        personListData[2],
        personListData[3],
      ]);
  }
  return createMainData(undefined, undefined, []);
};

export const createCommonDecorator = (state: string) => {
  const mainData = switchDataState(state);
  const basicDecorator = (Story: ComponentType) => (
    <SetPersonListContext.Provider value={mainData.personListValue}>
      <SetPersonDataContext.Provider value={mainData.personDataValue}>
        <SetUserDataContext.Provider value={mainData.userDataValue}>
          <Story />
        </SetUserDataContext.Provider>
      </SetPersonDataContext.Provider>
    </SetPersonListContext.Provider>
  );
  return basicDecorator;
};

export const createLoginMainPartsDecorator = (state: string) => {
  const commonDecorator = createCommonDecorator(state);
  const loginMainPartsDecorator = (Story: ComponentType) => (
    <BrowserRouter>{commonDecorator(Story)}</BrowserRouter>
  );
  return loginMainPartsDecorator;
};

export const createSendMainPartsDecorator = (state: string, sendStateValue = 0) => {
  const resetDataAll = {
    sendState: sendStateValue,
    resetTextValue: undefined,
    sendStateDispatch: () => {},
  };
  const commonDecorator = createCommonDecorator(state);
  const sendMainPartsDecorator = (Story: ComponentType) => (
    <BrowserRouter>
      <ResetSendStateContext.Provider value={resetDataAll}>
        {commonDecorator(Story)}
      </ResetSendStateContext.Provider>
    </BrowserRouter>
  );
  return sendMainPartsDecorator;
};

export const createEditPersonMainPartsDecorator = (state: string) => {
  const validateAll = {
    validateError: false,
    setValidateError: () => {},
  };
  const processFlgAll = {
    processFlg: {
      addProcessingFlg: false,
      editProcessingFlg: false,
      removeProcessingFlg: false,
    },
    processFlgDispatch: () => {},
  };
  const linkClickFlgAll = {
    listClickFlg: false,
    setListClickFlg: () => {},
  };
  const commonDecorator = createCommonDecorator(state);
  const editPersonMainPartsDecorator = (Story: ComponentType) => (
    <BrowserRouter>
      <ValidateResultContext.Provider value={validateAll}>
        <SetProcessFlgContext.Provider value={processFlgAll}>
          <SetLinkClickFlgContext.Provider value={linkClickFlgAll}>
            {commonDecorator(Story)}
          </SetLinkClickFlgContext.Provider>
        </SetProcessFlgContext.Provider>
      </ValidateResultContext.Provider>
    </BrowserRouter>
  );
  return editPersonMainPartsDecorator;
};
