import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { CSSTransition } from 'react-transition-group';
import { LoginContext } from '@src/context/login-context';
import homeIcon from '@images/icons/header.jpg';
const Login = () => {
  const week = ['一', '二', '三', '四', '五', '六', '日'];
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const [showTime, setShowTime] = useState(true);
  const [showInput, setInput] = useState(false);
  const login = () => {
    setLoginStatus('logined');
  };
  return (
    <div
      className='text-center h-screen bg'
      onClick={() => {
        setShowTime(false);
        setInput(true);
      }}
    >
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }} />
      <CSSTransition
        in={showTime}
        timeout={200}
        classNames='time'
        unmountOnExit
      >
        <div className='pt-36'>
          <div className='text-8xl font-semibold mb-6'>
            {dayjs().format('HH')} : {dayjs().format('mm')}
          </div>
          <div className='text-2xl'>
            {dayjs().month()}月{dayjs().date()}日，星期{week[dayjs().day() - 1]}
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={showInput}
        timeout={700}
        classNames='login'
        unmountOnExit
      >
        <div>
          <div className='header'>
            <img className='header-icon' src={homeIcon} alt='头像' />
            <p>Administrator</p>
            <button onClick={login}>登录</button>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Login;
