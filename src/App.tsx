import './App.css';
import { useMediaQuery, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import darkTheme from './stories/common/darkTheme';
import theme from './stories/common/theme';
import { LoginPage } from './stories/components/pages/LoginPage';
import { CommonTemplate } from './stories/components/templates/CommonTemplate';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const targetTheme = prefersDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={targetTheme}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/message' element={<CommonTemplate title='MESSAGE' />} />
        <Route path='/person' element={<CommonTemplate title='PERSON' />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
