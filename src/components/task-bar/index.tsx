/**
 * Win11任务栏
 */
import React, { useEffect } from 'react';
import Icon from '../icon';
import dingtalk from '@images/icons/钉钉.svg';

import { useTask } from '@context/task-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import TaskDate from './task-date';
import TaskPanel from './task-panel';

export default function TaskBar() {
  const { taskList, pushTask, openTask, showTask } = useTask();
  useEffect(() => {
    pushTask({
      id: 'dingtalk',
      name: 'DingTalk',
      show: false,
      closed: true,
      iconSrc: dingtalk,
      iconSize: 28,
      notification: 1,
    });
  }, []);

  return (
    <div className='absolute bottom-0 w-screen h-10 bg-task-bar-bg dark:bg-task-bar-bg-dark backdrop-filter saturate-300 blur-lg transition-all duration-200 ease'>
      <div className='relative w-full h-full'>
        {/* 左边 */}
        <div className='flex flex-col w-full h-full'>
          <div className='w-auto h-full flex justify-center items-center'>
            {/* 图标 */}
            {taskList.map((taskItem) => {
              return (
                <Icon
                  key={taskItem.id}
                  size={taskItem.iconSize ?? 22}
                  iconSrc={taskItem.iconSrc}
                  name={taskItem.name}
                  notification={taskItem.notification}
                  onClick={
                    taskItem.closed
                      ? () => openTask(taskItem.id)
                      : () => showTask(taskItem.id)
                  }
                  hover={true}
                  invert={taskItem.invert}
                />
              );
            })}
          </div>
        </div>
        {/* 右边 */}
        <div className='absolute top-0 right-0 w-auto h-full ml-2 flex filter dark:invert'>
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
