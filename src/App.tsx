import React, { useContext } from 'react';
import TaskBar from '@components/task-bar';
import Background from '@containers/background';
import Desktop from '@components/desktop';
import Login from './containers/login/Login';
import { LoginContext } from './context/login-context';
import BrightOverlay from './components/bright-overlay';

function App() {
  const { loginStatus } = useContext(LoginContext);
  return (
    <div className='App'>
      {loginStatus === 'logined' ? (
        <>
          <Background />
          <Desktop />
          <TaskBar />
          <BrightOverlay />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
