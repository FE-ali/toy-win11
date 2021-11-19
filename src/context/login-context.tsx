//登录页登录跳转到 Desktop
import React, { useState } from 'react';

export const LoginContext = React.createContext<{
  loginStatus: string;
  setLoginStatus: (status: string) => void;
}>({ loginStatus: 'lock', setLoginStatus: () => {} });

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [loginStatus, setLoginStatus] = useState('lock');
  return (
    <LoginContext.Provider
      children={children}
      value={{ loginStatus, setLoginStatus }}
    />
  );
};
