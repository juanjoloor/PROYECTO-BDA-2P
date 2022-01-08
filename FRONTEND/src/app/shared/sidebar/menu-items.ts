import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: '',
    class: 'nav-small-cap',
    label: '',
    labelClass: '',
    extralink: true,
    submenu: []
  },
  // {
  //   path: '/batallas/batallas-panel',
  //   title: 'Batallas Panel',
  //   icon: 'mdi mdi-gauge',
  //   class: '',
  //   label: '',
  //   labelClass: '',
  //   extralink: false,
  //   submenu: []
  // },
  {
    path: '/vuelos',
    title: 'VUELOS',
    icon: 'mdi mdi-airplane',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/pasajeros',
    title: 'PASAJEROS',
    icon: 'mdi mdi-account',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/reservas',
    title: 'RESERVAS',
    icon: 'mdi mdi-account-box',
    class: '',
    label: '',
    labelClass: '',
    extralink: false,
    submenu: []
  },

    
  
];
