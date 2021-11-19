/**
 * Win11任务栏的任务定义
 */
export interface Task {
  id: string;
  name: string;
  show: boolean;
  closed: boolean;
  iconSrc: string;
}
