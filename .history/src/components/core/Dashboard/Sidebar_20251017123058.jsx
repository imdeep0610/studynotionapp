import React from 'react';
import {sidebarLinks} from '../../../data/dashboard-links';
import {logout} from '../../../services/operations/authAPI';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  
    const {user,loading:profileLoading}=useSelector((state)=>state.profile);
    const {loading:authLoading}

  return (
    <div>
       <div></div>
       <div></div>
    </div>
  )
}

export default Sidebar
