/**
 * 控制面板按钮
 */
export interface SidePanelControlBtn {
  id: string;
  name: string;
  iconSrc: string;
  func: () => void;
  status: boolean;
}

/**
 * 控制面板slider
 */
export interface SidePanelControlSlider {
  id: string;
  name: string;
  iconSrc: string;
  iconSize?: number;
  func: () => void;
  value?: number;
}

/**
 * 系统控制值
 */
export interface SystemState {
  brightness: number;
  volume: number;
}
