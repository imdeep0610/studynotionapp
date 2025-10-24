import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  const {loading : profileLoading}=useSelector((state)=>state.profile);
  const {loading : authLoading}=useSelector((state)=>state.auth);

  if(profileLoading || authLoading){
    return (
        <div className='spinner'></div>
    )
  }

  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
       <Sidebar/>
       <div className='h-[calc(100vh-3.5rem)] overflow-auto'>
          <div className='w-11/12 mx-auto max-w-[100px] py-10'>

          </div>
       </div>
    </div>
  )
}

export default Dashboard
