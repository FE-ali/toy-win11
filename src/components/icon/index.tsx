import React from 'react';
interface BarIconProps {
  id?: string;
  iconSrc?: string;
  size?: number;
  name?: string;
}

export default function Icon({ iconSrc, size, name }: BarIconProps) {
  return (
    <div className='relative w-8 h-8 my-auto mx-1 box-border grid place-items-center bg-icon-bg rounded transition-all duration-200 ease-in-out hover:bg-icon-hover-bg origin-center'>
      <img
        src={iconSrc}
        alt={name}
        width={size}
        className='origin-center transition-all duration-200 ease-in-out transform active:scale-75'
      />
    </div>
  );
}