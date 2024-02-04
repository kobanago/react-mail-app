import './App.css';
import { Route, Routes } from 'react-router-dom';

import AuthGoogle from './AuthGoogle';
import { LoginPage } from './stories/components/pages/LoginPage';
import { CommonTemplate } from './stories/components/templates/CommonTemplate';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/message' element={<CommonTemplate title='MESSAGE' />} />
        <Route path='/person' element={<CommonTemplate title='PERSON' />} />
        <Route path='/auth' element={<AuthGoogle />} />
      </Routes>
    </>
  );
}

export default App;
