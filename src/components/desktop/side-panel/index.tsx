import React, { useEffect } from 'react';
import Icon from '@src/components/icon';
import { useSideControl } from '@src/context/side-panel-control-context';
import {
  SidePanelControlBtn,
  SidePanelControlSlider,
  SystemState,
} from '@src/typings/side-panel-control';
import './index.scss';

const QuickControlBtn = ({
  iconSrc,
  func,
  status,
  name,
}: SidePanelControlBtn) => {
  const { triggerBtnByName } = useSideControl();

  return (
    <div className='flex flex-col items-center'>
      <div
        onClick={() => {
          triggerBtnByName(name);
        }}
        className={`w-24 h-12 rounded justify-center flex items-center cursor-pointer border-side-panel-border border-01 border-solid transition-all duration-200 ease ${
          !status ? 'bg-side-panel-btn-bg' : 'bg-side-panel-btn-bg-on'
        } ${
          !status
            ? 'dark:bg-side-panel-btn-bg-dark'
            : 'dark:bg-side-panel-btn-bg-dark-on'
        }`}
      >
        <div className='relative grid place-items-center'>
          <Icon iconSrc={iconSrc} size={14} status={status} invert />
        </div>
      </div>
      <div className='w-max text-xs mb-4 mt-2 text-black dark:text-white transition-all duration-200 ease'>
        {name}
      </div>
    </div>
  );
};

const SliderController = ({
  iconSrc,
  func,
  iconSize,
  name,
}: SidePanelControlSlider) => {
  const inputEl = React.createRef<HTMLInputElement>();
  const { systemState, handleSlider, getSystemValue } = useSideControl();
  const value = getSystemValue(name as keyof SystemState);

  useEffect(() => {
    inputEl.current!.style.setProperty(
      '--track-color',
      `linear-gradient(90deg, var(--clrPrm) ${value - 3}%, #888888 ${value}%)`
    );
  }, [getSystemValue, inputEl, name, systemState, value]);

  return (
    <div className='w-full flex items-center'>
      <div className='relative grid place-items-center'>
        <Icon iconSrc={iconSrc} size={iconSize} invert />
      </div>
      <input
        type='range'
        min={10}
        max={100}
        value={value}
        onChange={(event) => {
          handleSlider(name, parseInt(event.target.value));
        }}
        className='border-none outline-none appearance-none bg-transparent sliders'
        ref={inputEl}
      />
    </div>
  );
};

export default function SidePanel() {
  const { btnList, sliderList, show } = useSideControl();

  return (
    <div
      className={`absolute bottom-4 right-4 w-90 bg-side-panel-bg rounded-lg backdrop-filter blur-lg transition-all duration-200 ease-in transform translate-x-0 ${
        show ? '' : 'transition-transform translate-x-110'
      } dark:bg-side-panel-bg-dark`}
    >
      <div className='flex flex-col gap-5 p-5'>
        <div className='w-full flex flex-wrap justify-between'>
          {btnList.map((item) => (
            <QuickControlBtn key={item.id} {...item} />
          ))}
        </div>
        {sliderList.map((item) => (
          <SliderController key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
