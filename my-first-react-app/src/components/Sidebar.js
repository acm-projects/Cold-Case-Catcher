//npm install react-icons --save

import React, { useState } from 'react';
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

import {ReactComponent as MenuBar} from '../img/menuBars.svg';
import {ReactComponent as CloseBar} from '../img/closeBars.svg';


//import { icons } from 'react-icons';




function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value = {{color: '#fff'}}>
    <div className="sidebar">
        <Link to="#" className='menu-bars'>
            <MenuBar 
                height="125px"
                padding-left="6vh"
                onClick={showSidebar}/>
        </Link>
    </div>
      
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items'onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className = 'menu-bars'>
                    <CloseBar />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return(
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        
                    </Link>    
                    </li>
                )
            })}
        </ul>
     </nav>
     </IconContext.Provider>
    </>
  )
}

export default Sidebar