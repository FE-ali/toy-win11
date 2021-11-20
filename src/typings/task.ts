/**
 * Win11任务栏的任务定义
 */
export interface Task {
  id: string;
  name: string;
  show: boolean;
  closed: boolean;
  iconSrc: string;
  iconSize?: number;
  notification?: number;
  invert?: boolean; //图标使用png图片在黑夜模式下反转成白色
}
