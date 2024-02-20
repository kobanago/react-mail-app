import './App.css';
import { useMediaQuery, ThemeProvider } from '@mui/material';
import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  SetPersonDataContext,
  SetPersonListContext,
  SetUserDataContext,
} from './stories/common/context';
import darkTheme from './stories/common/darkTheme';
import {
  setPersonDataFunc,
  setPersonListFunc,
  setUserDataFunc,
} from './stories/common/reducers';
import theme from './stories/common/theme';
import { LoginPage } from './stories/components/pages/LoginPage';
import { CommonTemplate } from './stories/components/templates/CommonTemplate';

function App() {
  const [personData, personDataDispatch] = useReducer(setPersonDataFunc, undefined);
  const [userData, userDataDispatch] = useReducer(setUserDataFunc, undefined);
  const [personList, personListDispatch] = useReducer(setPersonListFunc, undefined);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const targetTheme = prefersDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={targetTheme}>
      <SetPersonDataContext.Provider value={{ personData, personDataDispatch }}>
        <SetUserDataContext.Provider value={{ userData, userDataDispatch }}>
          <SetPersonListContext.Provider value={{ personList, personListDispatch }}>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/message' element={<CommonTemplate title='MESSAGE' />} />
              <Route path='/person' element={<CommonTemplate title='PERSON' />} />
            </Routes>
          </SetPersonListContext.Provider>
        </SetUserDataContext.Provider>
      </SetPersonDataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
