import React from 'react';

import wifiIcon from '@images/ui/wifi.png';
import audioIcon from '@images/ui/audio3.png';
import plugIcon from '@images/ui/plug.png';
import { useSideControl } from '@src/context/side-panel-control-context';

export default function TaskPanel() {
  const { triggerSidePanelShow } = useSideControl();
  return (
    <div
      className='px-1 my-1 flex rounded cursor-pointer hover:bg-icon-hover-bg transition-all duration-300 ease-linear'
      onClick={triggerSidePanelShow}
    >
      <div className='w-6 relative grid place-items-center'>
        <img src={wifiIcon} width={16} alt='wifi' />
      </div>
      <div className='w-6 relative grid place-items-center'>
        <img src={audioIcon} width={16} alt='aduio' />
      </div>
      <div className='w-6 relative grid place-items-center'>
        <div className='flex relative'>
          <div className='absolute -ml-0.5 -mt-0.5 filter drop-shadow-battery invert-14'>
            <img
              src={plugIcon}
              width={6}
              alt='plug'
              className='transition-all duration-400 ease-in-out origin-center'
            />
          </div>
          <i className='fa fa-battery-full text-xs'></i>
        </div>
      </div>
    </div>
  );
}
