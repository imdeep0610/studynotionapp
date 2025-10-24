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
        className={`relative px-8 py-2 text-sm font-medium 
        ${matchRoute(link.path) ? 'bg-yellow-800' : 'bg-opacity-0'}`}>
            {/*Span tag will be visible only when the path is matched 
            means if we click on some link then the yello line at left will appear*/}
          <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 
            ${matchRoute(link.path) ? "opacity-full" : "opacity-0"}`}>
          </span>
          <div className='flex items-center gap-3'>

          </div>
        </NavLink>
    </div>
  )
}

export default SidebarLink
