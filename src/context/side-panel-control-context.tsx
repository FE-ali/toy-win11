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
import moonIcon from '@images/ui/moon.png';
import sunIcon from '@images/ui/sun.png';

export const SidePanelControlContext = React.createContext<
  | {
      show: boolean;
      darkMode: boolean;
      systemState: SystemState;
      getSystemValue: (key: keyof SystemState) => number;
      handleSlider: (type: string, value: number) => void;
      btnList: SidePanelControlBtn[];
      sliderList: SidePanelControlSlider[];
      addBtn: (btn: SidePanelControlBtn) => void;
      addSlider: (slider: SidePanelControlSlider) => void;
      triggerSidePanelShow: () => void;
      triggerBtnByName: (name: string) => void;
    }
  | undefined
>(undefined);

SidePanelControlContext.displayName = 'SidePanelControlContext';

export const SidePanelControlProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [nightLight, setNightLight] = useState(false);
  const [btnList, setBtnList] = useState(() => initalSidePanelControlBtn());
  const [sliderList, setSliderList] = useState(() =>
    initialSidePanelControlSlider()
  );
  const [systemState, setSystemState] = useState({
    brightness: 100,
    volume: 100,
  });

  const triggerBtnByName = (name: string) => {
    console.log('name', name);
    const btnIndex = btnList.findIndex((btn) => btn.name === name);
    if (btnIndex !== -1) {
      const btnObj = btnList[btnIndex];
      btnObj.status = !btnObj.status;
      setBtnList([...btnList]);
    }
    switch (name) {
      case 'Theme':
        triggerDarkMode();
        break;
      case 'Night Light':
        triggerNightLight();
        break;
      default:
        break;
    }
  };

  const triggerNightLight = () => {
    document.body.dataset.sepia = !nightLight + '';
    setNightLight(!nightLight);
  };

  const triggerDarkMode = () => {
    const btn = btnList.find((item) => item.name === 'Theme');
    if (darkMode === false) {
      document.documentElement.classList.add('dark');
      if (btn) {
        btn.iconSrc = moonIcon;
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (btn) {
        btn.iconSrc = sunIcon;
      }
    }
    setDarkMode(!darkMode);
  };

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
        darkMode,
        btnList,
        addBtn,
        sliderList,
        addSlider,
        getSystemValue,
        handleSlider,
        systemState,
        triggerSidePanelShow,
        triggerBtnByName,
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
