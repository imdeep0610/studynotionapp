import React from 'react';
import {sidebarLinks} from '../../../data/dashboard-links';
import {logout} from '../../../services/operations/authAPI';
import { useSelector } from 'react-redux';
import '../App.css';

const Sidebar = () => {
  
    const {user,loading:profileLoading}=useSelector((state)=>state.profile);
    const {loading:authLoading}=useSelector((state)=>state.auth);
    if(profileLoading || authLoading){
         return (
        <div className='spinner'></div>
        )
    }

  return (
    <div>
       <div className='flex min-w-[222px] flex-col border-r-[1px]'>

       </div>
    </div>
  )
}

export default Sidebar
