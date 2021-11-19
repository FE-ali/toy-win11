import React from 'react';
interface BarIconProps {
  id?: string;
  iconSrc?: string;
  size?: number;
  name?: string;
  hover?: boolean;
  status?: boolean;
  invert?: boolean;
}

export default function Icon({
  iconSrc,
  size,
  name,
  hover,
  invert,
  status,
}: BarIconProps) {
  return (
    <div
      className={`relative w-8 h-8 my-auto mx-1 box-border grid place-items-center bg-icon-bg rounded transition-all duration-200 ease ${
        hover ? 'hover:bg-icon-hover-bg dark:hover:bg-icon-hover-bg-dark' : ''
      } origin-center`}
    >
      <img
        src={iconSrc}
        alt={name}
        width={size}
        className={`origin-center transition-all duration-200 ease transform active:scale-75
         ${invert && !status ? 'filter dark:invert' : ''}`}
      />
    </div>
  );
}
