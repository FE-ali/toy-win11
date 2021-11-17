import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
export default function TaskDate() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(dayjs());
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className='w-11 m-1 px-1 pb-1 pt-0.5 text-xs flex flex-col rounded cursor-pointer hover:bg-icon-hover-bg transition-all duration-300 ease-linear justify-center items-center'>
      <div>{time.format("HH:mm")}</div>
      <div>{time.format("MM/YYYY")}</div>
    </div>
  );
}
