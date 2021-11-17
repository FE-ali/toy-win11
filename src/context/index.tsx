/**
 * 全局Provider
 */
import React from 'react';
import { TaskProvider } from './task-context';

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TaskProvider>{children}</TaskProvider>;
}
