import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
    const {user}=useSelector((state)=>state.profile)
    
  return (
    <div>
      
    </div>
  )
}

export default MyProfile
