import { Task } from '@typings/task';
import homeIcon from '@images/icons/home.png';
import searchIcon from '@images/icons/search.png';
import widgetIcon from '@images/icons/widget.png';
import wifiIcon from '@images/ui/wifi.png';
import bluetoothIcon from '@images/ui/bluetooth.png';
import saverIcon from '@images/ui/saver.png';
import airplaneIcon from '@images/ui/airplane.png';
import sunIcon from '@images/ui/sun.png';
import locationIcon from '@images/ui/location.png';
import nightlightIcon from '@images/ui/nightlight.png';
import connectIcon from '@images/ui/connect.png';
import projectIcon from '@images/ui/project.png';
import brightnessIcon from '@images/ui/brightness.png';
import audio3Icon from '@images/ui/audio3.png';
import userDirIcon from '@images/apps/userDir.png';
import bin0Icon from '@images/apps/bin0.png';
import edgeIcon from '@images/apps/edge.png';
import githubIcon from '@images/apps/github.png';
import storeIcon from '@images/apps/store.png';
import explorerIcon from '@images/apps/explorer.png';
import {
  SidePanelControlBtn,
  SidePanelControlSlider,
} from '@src/typings/side-panel-control';
import { DesktopApps } from '@src/typings/desktop-app';

export const initalTaskListState: () => Task[] = () => {
  return [
    { id: '001', name: 'home', show: false, closed: true, iconSrc: homeIcon },
    {
      id: '002',
      name: 'search',
      show: false,
      closed: true,
      iconSrc: searchIcon,
    },
    { id: '003', name: 'home', show: false, closed: true, iconSrc: widgetIcon },
  ];
};

export const initalDesktopApps: () => DesktopApps[] = () => {
  return [
    {
      id: '001',
      name: 'UserDir',
      func: () => {},
      status: false,
      iconSrc: userDirIcon,
    },
    {
      id: '002',
      name: 'Recycle Bin',
      func: () => {},
      status: false,
      iconSrc: bin0Icon,
    },
    {
      id: '003',
      name: 'File Explorer',
      func: () => {},
      status: false,
      iconSrc: explorerIcon,
    },
    {
      id: '004',
      name: 'Edge',
      func: () => {},
      status: false,
      iconSrc: edgeIcon,
    },
    {
      id: '005',
      name: 'Github',
      func: () => {},
      status: false,
      iconSrc: githubIcon,
    },
    {
      id: '006',
      name: 'Store',
      func: () => {},
      status: false,
      iconSrc: storeIcon,
    },
  ];
};

export const initalSidePanelControlBtn: () => SidePanelControlBtn[] = () => {
  return [
    {
      id: '001',
      name: 'WiFi',
      func: () => {},
      status: false,
      iconSrc: wifiIcon,
    },
    {
      id: '002',
      name: 'Bluetooth',
      func: () => {},
      status: false,
      iconSrc: bluetoothIcon,
    },
    {
      id: '003',
      name: 'Airplane Mode',
      func: () => {},
      status: false,
      iconSrc: airplaneIcon,
    },
    {
      id: '004',
      name: 'Battery Saver',
      func: () => {},
      status: false,
      iconSrc: saverIcon,
    },
    {
      id: '005',
      name: 'Theme',
      func: () => {},
      status: false,
      iconSrc: sunIcon,
    },
    {
      id: '006',
      name: 'Location',
      func: () => {},
      status: false,
      iconSrc: locationIcon,
    },
    {
      id: '007',
      name: 'Night Light',
      func: () => {},
      status: false,
      iconSrc: nightlightIcon,
    },
    {
      id: '008',
      name: 'Connect',
      func: () => {},
      status: false,
      iconSrc: connectIcon,
    },
    {
      id: '009',
      name: 'Project',
      func: () => {},
      status: false,
      iconSrc: projectIcon,
    },
  ];
};

export const initialSidePanelControlSlider: () => SidePanelControlSlider[] =
  () => {
    return [
      {
        id: '001',
        name: 'brightness',
        iconSrc: brightnessIcon,
        func: () => {},
        iconSize: 20,
      },
      {
        id: '002',
        name: 'volume',
        iconSrc: audio3Icon,
        func: () => {},
        iconSize: 18,
      },
    ];
  };
