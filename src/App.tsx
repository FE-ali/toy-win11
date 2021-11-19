import React from 'react';
import TaskBar from '@components/task-bar';
import Background from '@containers/background';
import Desktop from '@components/desktop';

function App() {
  return (
    <div className='App'>
      <Background />
      <Desktop />
      <TaskBar />
    </div>
  );
}

export default App;
