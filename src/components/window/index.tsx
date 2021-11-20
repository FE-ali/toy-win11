import { useTask } from '@src/context/task-context';
import { Task } from '@src/typings/task';
import React, { useCallback, useState } from 'react';
import DingTalk from './dingtalk';
import HideIcon from '@images/icons/hide.svg';
import ResizeIcon from '@images/icons/resize.svg';
import CloseIcon from '@images/icons/close.svg';

export default function Window(props: { task: Task }) {
  const { task } = props;
  const { hideTask, closeTask } = useTask();
  const [ifFullScreen, setIfFullScreen] = useState(false);
  const [bgColor, setBgColor] = useState('bg-window-default');

  const changeBgColor = useCallback((colorName: string) => {
    setBgColor(colorName);
  }, []);

  const initFullScreen = useCallback((ifFullScreen: boolean) => {
    setIfFullScreen(ifFullScreen);
  }, []);

  return (
    <div
      className={`absolute ${
        ifFullScreen
          ? 'w-screen h-desktop-height top-0 left-0'
          : 'w-2/3 h-3/4 bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded filter drop-shadow-lg'
      } ${bgColor} transition-all duration-300`}
    >
      <div className={`absolute w-full h-full top-0 left-0`}>
        {task.id === 'dingtalk' ? (
          <DingTalk
            show={task.show}
            changeBgColor={changeBgColor}
            initFullScreen={initFullScreen}
          />
        ) : (
          <></>
        )}
      </div>
      <div className='select-none absolute w-full h-6 top-0 left-0 flex flex-row align-middle justify-end gap-1'>
        <div
          className='w-10 h-6 flex align-middle justify-center hover:bg-hide-hover'
          onClick={() => hideTask(task.id)}
        >
          <img className='w-4' src={HideIcon} alt='' />
        </div>
        <div
          className='w-10 h-6 flex align-middle justify-center hover:bg-resize-hover'
          onClick={() => setIfFullScreen(!ifFullScreen)}
        >
          <img className='w-4' src={ResizeIcon} alt='' />
        </div>
        <div
          className='w-10 h-6 flex align-middle justify-center hover:bg-close-hover'
          onClick={() => closeTask(task.id)}
        >
          <img className='w-4' src={CloseIcon} alt='' />
        </div>
      </div>
    </div>
  );
}
