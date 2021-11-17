import React from 'react';
import TaskBar from '@components/task-bar';
import Background from '@containers/background';

function App() {
  return (
    <div className='App'>
      <Background />
      <TaskBar />
    </div>
  );
}

export default App;
