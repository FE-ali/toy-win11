import React, { useContext } from 'react';
import TaskBar from '@components/task-bar';
import Background from '@containers/background';
import Desktop from '@components/desktop';
import Window from '@components/window';
import Login from './containers/login/Login';
import { LoginContext } from './context/login-context';
import BrightOverlay from './components/bright-overlay';
import { useTask } from './context/task-context';
import './App.scss';

function App() {
  const { loginStatus } = useContext(LoginContext);
  const { taskList } = useTask();
  return (
    <div className='App relative'>
      {loginStatus === 'logined' ? (
        <>
          <Background />
          <Desktop />
          <TaskBar />
          {taskList.map((item) => {
            if (item.show) {
              return <Window task={item} />;
            }
            return <></>;
          })}
          <BrightOverlay />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
