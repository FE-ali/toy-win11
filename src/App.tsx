import React, { useContext } from 'react';
import TaskBar from '@components/task-bar';
import Background from '@containers/background';
import Login from './containers/login/Login';
import { LoginContext } from './context/login-context';

function App() {
  const { loginStatus } = useContext(LoginContext);
  return (
    <div className='App'>
      {loginStatus === 'logined' ? (
        <>
          <Background />
          <TaskBar />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
