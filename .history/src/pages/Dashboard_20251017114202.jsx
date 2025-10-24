import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const {loading : profileLoading}=useSelector((state)=>state.profile);
  const {loading : authLoading}=useSelector((state)=>state.auth)

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
