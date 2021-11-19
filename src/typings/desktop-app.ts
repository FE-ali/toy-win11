//文件资源管理器
export interface DesktopApps {
    id: string;
    name: string;
    iconSrc: string;
    func: () => void;
    status: boolean;
  }