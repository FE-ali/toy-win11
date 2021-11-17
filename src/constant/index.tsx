import { Task } from '@typings/task';
import homeIcon from '@images/icons/home.png';
import searchIcon from '@images/icons/search.png';
import widgetIcon from '@images/icons/widget.png';

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
