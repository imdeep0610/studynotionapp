import React from 'react'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {

    const {token}=useSelector((state)=>state.auth)
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
