import React from 'react';
interface BarIconProps {
  id?: string;
  iconSrc?: string;
  size?: number;
  name?: string;
  notification?: number;
  onClick?: React.MouseEventHandler;
}

export default function Icon({
  iconSrc,
  size,
  name,
  notification,
  onClick,
}: BarIconProps) {
  return (
    <div
      className={`relative w-8 h-8 my-auto mx-1 box-border grid place-items-center bg-icon-bg rounded transition-all duration-200 ease-in-out hover:bg-icon-hover-bg origin-center`}
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt={name}
        width={size}
        className='origin-center transition-all duration-200 ease-in-out transform active:scale-75'
      />
      {notification ? (
        <div className='absolute top-0 right-0 w-3 h-3 flex align-middle justify-center text-3xs text-white bg-red rounded-full'>
          {notification}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
