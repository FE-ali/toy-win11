/**
 * 全局Provider
 */
import React from 'react';
import { SidePanelControlProvider } from './side-panel-control-context';
import { TaskProvider } from './task-context';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TaskProvider>
      <SidePanelControlProvider>{children}</SidePanelControlProvider>
    </TaskProvider>
  );
}
