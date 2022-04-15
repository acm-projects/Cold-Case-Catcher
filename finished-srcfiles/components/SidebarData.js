
import React from 'react';
import {ReactComponent as Profile} from './img/profile.svg';
import {ReactComponent as Settings} from './img/settings.svg';
import {ReactComponent as Notebook} from './img/notebook.svg';
import {ReactComponent as Home} from './img/home.svg';







export const SidebarData = [
    {
        title: '',
        path:   '',
        cName: 'nav-text'
      },
      {
        title: '',
        path:   '',
        cName: 'nav-text'
      },
    {
    title: 'HOME',
    path:   '/',
    icon:   <Home/>,
    cName: 'nav-text'
  },
  {
    title: 'PROFILE',
    path: '/profile',
    icon:  <Profile/>,
    cName: 'nav-text'
  },
  {
    title: 'NOTEBOOK',
    path: '/notebook',
    icon: <Notebook />,
    cName: 'nav-text'
  },
  {
    title: 'SETTINGS',
    path: '/settings',
    icon: <Settings/>,
    cName: 'nav-text'
  },
  {
    title: 'CASE',
    path: '/casepage',
    icon: <Notebook />,
    cName: 'nav-text'
  }
];