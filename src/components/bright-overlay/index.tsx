import { useSideControl } from '@src/context/side-panel-control-context';
import React from 'react';

export default function BrightOverlay() {
  const {
    systemState: { brightness },
  } = useSideControl();
  return (
    <div
      className='absolute top-0 left-0 w-screen h-screen pointer-events-none bg-black'
      style={{
        opacity: 1 - brightness * 0.01,
      }}
    ></div>
  );
}
