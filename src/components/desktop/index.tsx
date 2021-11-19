import React from 'react';
import SidePanel from './side-panel';
import DeskApps from './apps'

export default function Desktop() {
  return (
    <div className='absolute w-screen h-desktop-height top-0 overflow-hidden'>
      <SidePanel />
      <DeskApps />
    </div>
  );
}
