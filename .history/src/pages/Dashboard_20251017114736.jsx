import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

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
          <div className='w-11/12 mx-auto max-w-[100px]'>

          </div>
       </div>
    </div>
  )
}

export default Dashboard
