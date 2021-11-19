import React, { useState } from 'react';
import {
  SidePanelControlBtn,
  SidePanelControlSlider,
  SystemState,
} from '@src/typings/side-panel-control';
import {
  initalSidePanelControlBtn,
  initialSidePanelControlSlider,
} from '@src/constant';

export const SidePanelControlContext = React.createContext<
  | {
      show: boolean;
      systemState: SystemState;
      getSystemValue: (key: keyof SystemState) => number;
      handleSlider: (type: string, value: number) => void;
      btnList: SidePanelControlBtn[];
      sliderList: SidePanelControlSlider[];
      addBtn: (btn: SidePanelControlBtn) => void;
      addSlider: (slider: SidePanelControlSlider) => void;
      triggerSidePanelShow: () => void;
    }
  | undefined
>(undefined);

export const SidePanelControlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const [btnList, setBtnList] = useState(() => initalSidePanelControlBtn());
  const [sliderList, setSliderList] = useState(() =>
    initialSidePanelControlSlider()
  );
  const [systemState, setSystemState] = useState({
    brightness: 100,
    volume: 100,
  });

  const triggerSidePanelShow = () => {
    setShow(!show);
  };

  const getSystemValue = (key: keyof SystemState) => {
    return systemState[key];
  };

  const setScreenBrightness = (brightness: number) => {
    if (brightness <= 100 && brightness >= 10) {
      setSystemState({
        ...systemState,
        brightness,
      });
    }
  };

  const setSystemVolume = (volume: number) => {
    if (volume <= 100 && volume >= 0) {
      setSystemState({
        ...systemState,
        volume,
      });
    }
  };

  const handleSlider = (type: string, value: number) => {
    if (type === 'brightness') {
      setScreenBrightness(value);
    } else {
      setSystemVolume(value);
    }
  };

  const addBtn = (btn: SidePanelControlBtn) => {
    setBtnList([...btnList, btn]);
  };

  const addSlider = (slider: SidePanelControlSlider) => {
    setSliderList([...sliderList, slider]);
  };

  return (
    <SidePanelControlContext.Provider
      value={{
        show,
        btnList,
        addBtn,
        sliderList,
        addSlider,
        getSystemValue,
        handleSlider,
        systemState,
        triggerSidePanelShow,
      }}
    >
      {children}
    </SidePanelControlContext.Provider>
  );
};

export const useSideControl = () => {
  const context = React.useContext(SidePanelControlContext);
  if (!context) {
    throw new Error('useSideBtn必须在SidePanelControlProvider中使用');
  }
  return context;
};
