/**
 * Win11任务栏
 */
import React from 'react';
import Icon from '../icon';

import { useTask } from '@context/task-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import TaskDate from './task-date';
import TaskPanel from './task-panel';

export default function TaskBar() {
  const { taskList } = useTask();
  return (
    <div className='absolute bottom-0 w-screen h-10 bg-task-bar-bg backdrop-filter saturate-300 blur-lg'>
      <div className='relative w-full h-full'>
        {/* 左边 */}
        <div className='flex flex-col w-full h-full'>
          <div className='w-auto h-full flex justify-center items-center'>
            {/* 图标 */}
            {taskList.map((taskItem) => {
              return (
                <Icon
                  key={taskItem.id}
                  size={22}
                  iconSrc={taskItem.iconSrc}
                  name={taskItem.name}
                />
              );
            })}
          </div>
        </div>
        {/* 右边 */}
        <div className='absolute top-0 right-0 w-auto h-full ml-2 flex'>
          <div className='w-6 relative grid place-items-center'>
            <FontAwesomeIcon icon={faChevronUp} className='w-2.5 h-2.5' />
          </div>
          <TaskPanel />
          <TaskDate />
          <div className='ml-1'></div>
        </div>
      </div>
    </div>
  );
}
