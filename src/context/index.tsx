/**
 * 全局Provider
 */
import React from 'react';
import { TaskProvider } from './task-context';
import { LoginProvider } from './login-context';
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoginProvider>
      <TaskProvider>{children}</TaskProvider>
    </LoginProvider>
  );
}
