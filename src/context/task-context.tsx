/**
 * 任务 Context、Provider和自定义hook
 */
import React, { useState } from 'react';
import { initalTaskListState } from '@constant/index';
import { Task } from '@typings/task';

export const TaskContext = React.createContext<
  | {
      taskList: Task[];
      pushTask: (task: Task) => void;
      popTask: () => void;
      getTaskById: (id: string) => Task | undefined;
      hideAllTask: () => void;
      deleteTaskById: (id: string) => void;
      moveTaskTopById: (id: string) => void;
    }
  | undefined
>(undefined);

TaskContext.displayName = 'TaskContext';

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [taskList, setTaskList] = useState<Task[]>(() => initalTaskListState());

  const pushTask = (task: Task) => {
    setTaskList([...taskList, task]);
  };

  const popTask = () => {
    if (taskList?.length) {
      const copy = taskList.splice(taskList.length - 1, 1);
      setTaskList(copy);
    }
  };

  const getTaskById = (id: string) => {
    return taskList.find((item) => item.id === id);
  };

  const hideAllTask = () => {
    const copy = taskList.map((item) => {
      item.show = false;
      return item;
    });
    setTaskList(copy);
  };

  const deleteTaskById = (id: string) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const moveTaskTopById = (id: string) => {
    const itemIndex = taskList.findIndex((item) => item.id === id);
    if (itemIndex === -1) return;
    const item = taskList.slice(itemIndex, 1);
    setTaskList([...taskList, ...item]);
  };

  return (
    <TaskContext.Provider
      children={children}
      value={{
        taskList,
        pushTask,
        popTask,
        getTaskById,
        hideAllTask,
        deleteTaskById,
        moveTaskTopById,
      }}
    />
  );
};

export const useTask = () => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error('useTask必须在TaskProvider中使用');
  }
  return context;
};
