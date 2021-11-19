/**
 * 全局Provider
 */
import React from 'react';
import { SidePanelControlProvider } from './side-panel-control-context';
import { TaskProvider } from './task-context';
import { LoginProvider } from './login-context';
import { DesktopAppsProvider } from './desktop-apps';
export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoginProvider>
      <TaskProvider>
        <SidePanelControlProvider>
          <DesktopAppsProvider>
            {children}
          </DesktopAppsProvider>
        </SidePanelControlProvider>
      </TaskProvider>
    </LoginProvider>
  );
}
