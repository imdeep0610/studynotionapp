import React from 'react';
import * as Icons from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarLink = ({link,iconName}) => {

    const Icon=Icons[iconName];
    const location =useLocation();
     const dispatch=useDispatch();

     const matchRoute=(route)=>{
         return matchRoute({path:route},location.pathname)
     }

  return (
    <div>
        <NavLink to={link.path}
        className={`relative px-8 py-2 text-sm ${matchRoute(link.path) ? 'bg-yellow-300' : 'bg-opacity-0'}`}>

        </NavLink>
    </div>
  )
}

export default SidebarLink
